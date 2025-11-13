// src/routes/AdminAddProduct.jsx
import { useEffect, useState, useRef } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { categories as CATEGORIES_FILE } from "../data/catalog.js"; // fallback local list

// utility: compress image using canvas, return Blob
async function compressImageFile(file, maxWidth = 1200, quality = 0.75) {
  if (!file || !file.type.startsWith("image/")) return file;
  const img = await new Promise((res, rej) => {
    const url = URL.createObjectURL(file);
    const i = new Image();
    i.onload = () => { URL.revokeObjectURL(url); res(i); };
    i.onerror = rej;
    i.src = url;
  });

  const scale = Math.min(1, maxWidth / img.width);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  return await new Promise((res) => {
    canvas.toBlob((blob) => {
      // if blob is null fallback to original
      res(blob || file);
    }, "image/jpeg", quality);
  });
}

export default function AdminAddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(""); // slug or name
  const [sub, setSub] = useState("");
  const [subOptions, setSubOptions] = useState([]);
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  // typeahead state
  const [q, setQ] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [showAddCatModal, setShowAddCatModal] = useState(false);
  const newCatNameRef = useRef();

  useEffect(() => {
    // load categories from DB; fallback to local file
    async function loadCats() {
      try {
        const { data, error } = await supabase.from("categories").select("*").order("name");
        if (!error && data && data.length) {
          setCategoryOptions(data.map((r) => ({ name: r.name, slug: r.slug ?? r.name, subs: r.subs ?? [] })));
        } else {
          // fallback to local
          setCategoryOptions(CATEGORIES_FILE.map((c) => ({ name: c.name, slug: c.slug, subs: c.subs })));
        }
      } catch (e) {
        console.error("loadCats error", e);
        setCategoryOptions(CATEGORIES_FILE.map((c) => ({ name: c.name, slug: c.slug, subs: c.subs })));
      }
    }
    loadCats();

    // auth session
    (async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user ?? null);
    })();

    const sub = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => sub?.subscription?.unsubscribe?.();
  }, []);

  // update subOptions when category changes
  useEffect(() => {
    if (!category) { setSubOptions([]); setSub(""); return; }
    const c = categoryOptions.find((x) => x.slug === category || x.name === category);
    if (c?.subs && Array.isArray(c.subs)) setSubOptions(c.subs);
    else setSubOptions([]);
    if (c && (!c.subs || !c.subs.includes(sub))) setSub("");
  }, [category, categoryOptions]);

  async function uploadImage(file) {
    if (!file) return null;
    const bucket = "product-images";
    const compressed = await compressImageFile(file, 1200, 0.75);
    const blob = compressed instanceof Blob ? compressed : file;
    const ext = (file.name && file.name.split(".").pop()) || "jpg";
    const fileName = `${Date.now()}_${Math.random().toString(36).slice(2,8)}.${ext}`;

    const { data: uploadData, error: uploadErr } = await supabase.storage
      .from(bucket)
      .upload(fileName, blob, { cacheControl: "3600", upsert: false });

    if (uploadErr) {
      console.error("uploadErr", uploadErr);
      throw uploadErr;
    }

    // v2 getPublicUrl returns { data: { publicUrl } }
    const { data: urlData, error: urlErr } = await supabase.storage.from(bucket).getPublicUrl(uploadData.path ?? fileName);
    if (urlErr) {
      console.warn("getPublicUrl failed; trying signed url", urlErr);
      // fallback signed url 1 hour
      const { data: signedData, error: signedErr } = await supabase.storage.from(bucket).createSignedUrl(uploadData.path ?? fileName, 60*60);
      if (signedErr) throw signedErr;
      return signedData.signedUrl;
    }
    return urlData.publicUrl ?? urlData.publicURL ?? null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) { setMessage("Silakan login dulu."); return; }
    setMessage("Menyimpan...");
    try {
      const image_url = imageFile ? await uploadImage(imageFile) : null;
      const payload = {
        name,
        category,
        sub,
        price: price ? parseFloat(price) : null,
        description: desc,
        image_url,
      };

      const { data, error } = await supabase.from("products").insert([payload]).select();
      if (error) throw error;
      setMessage("Produk berhasil ditambahkan ✅");
      setName(""); setCategory(""); setSub(""); setPrice(""); setDesc(""); setImageFile(null);
    } catch (err) {
      console.error(err);
      setMessage("Error: " + (err.message || JSON.stringify(err)));
    }
  };

  // add new category (modal)
  const handleAddCategory = async () => {
    const newName = newCatNameRef.current?.value?.trim();
    if (!newName) return;
    const slug = newName.toLowerCase().replace(/\s+/g,"-");
    try {
      const { data, error } = await supabase.from("categories").insert([{ name: newName, slug }]).select();
      if (error) throw error;
      setCategoryOptions((s) => [{ name: newName, slug, subs: [] }, ...s]);
      setShowAddCatModal(false);
      setCategory(slug);
      setTimeout(()=> newCatNameRef.current.value = "", 0);
    } catch (err) {
      console.error("addCat err", err);
      alert("Gagal menambah kategori: " + (err.message || JSON.stringify(err)));
    }
  };

  // filtered suggestions for typeahead
  const suggestions = q
    ? categoryOptions.filter((c) => c.name.toLowerCase().includes(q.toLowerCase())).slice(0,8)
    : categoryOptions.slice(0,8);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Tambah Produk</h2>

      {!user && (
        <div className="p-3 mb-4 rounded bg-yellow-50 border border-yellow-200">
          Kamu belum login — silakan login lewat halaman Admin Login sebelum menambah produk.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Nama produk" className="w-full p-3 border rounded" required />

        {/* typeahead */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
          <div className="relative">
            <input
              value={q}
              onChange={(e)=>{ setQ(e.target.value); }}
              placeholder="Ketik untuk mencari kategori atau pilih dari daftar"
              className="w-full p-3 border rounded"
            />
            <div className="absolute right-2 top-2">
              <button type="button" className="text-sm text-rose-700" onClick={()=>setShowAddCatModal(true)}>+ Tambah kategori</button>
            </div>

            {suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 mt-1 bg-white border rounded shadow z-40 max-h-52 overflow-auto">
                {suggestions.map((s) => (
                  <li key={s.slug} className="p-2 hover:bg-rose-50 cursor-pointer flex justify-between items-center"
                    onClick={() => { setCategory(s.slug); setQ(s.name); }}>
                    <div>
                      <div className="text-sm font-medium">{s.name}</div>
                      {s.subs?.length ? <div className="text-xs text-gray-500">{s.subs.join(", ")}</div> : null}
                    </div>
                    <div className="text-xs text-gray-400">Pilih</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <input type="hidden" value={category} />
        </div>

        {/* Sub select */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sub Kategori</label>
          <select value={sub} onChange={(e)=>setSub(e.target.value)} className="w-full p-3 border rounded" disabled={!subOptions.length}>
            <option value="">{subOptions.length ? "— Pilih sub —" : "— tidak ada sub —"}</option>
            {subOptions.map((s)=> <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Harga (angka saja)" className="w-full p-3 border rounded" />

        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Deskripsi" className="w-full p-3 border rounded" rows={4} />

        <div>
          <label className="block mb-2 text-sm text-gray-600">Gambar produk</label>
          <input type="file" accept="image/*" onChange={(e)=>setImageFile(e.target.files?.[0]||null)} />
        </div>

        <div>
          <button type="submit" className="px-4 py-2 bg-rose-600 text-white rounded">Simpan</button>
        </div>
      </form>

      {message && <p className="mt-3 text-sm">{message}</p>}

      {/* Modal add category */}
      {showAddCatModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded shadow w-full max-w-md">
            <h3 className="text-lg font-semibold mb-3">Tambah Kategori Baru</h3>
            <input ref={newCatNameRef} className="w-full p-3 border rounded" placeholder="Nama kategori (contoh: 'Topi')" />
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={()=>setShowAddCatModal(false)} className="px-4 py-2 border rounded">Batal</button>
              <button onClick={handleAddCategory} className="px-4 py-2 bg-rose-600 text-white rounded">Tambah</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
