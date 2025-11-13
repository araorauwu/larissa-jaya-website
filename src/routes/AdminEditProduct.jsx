// src/routes/AdminEditProduct.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import { categories as CATEGORIES_FILE } from "../data/catalog";

async function compressImageFile(file, maxWidth = 1200, quality = 0.75) {
  // same as earlier; omitted for brevity — copy function from AdminAddProduct.jsx
  // For brevity here, re-implement inline as needed (or import a util).
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
    canvas.toBlob((blob) => res(blob || file), "image/jpeg", quality);
  });
}

export default function AdminEditProduct(){
  const { id } = useParams();
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    (async ()=>{
      const { data } = await supabase.from("products").select("*").eq("id", id).single();
      setProduct(data);
      try {
        const { data: cats } = await supabase.from("categories").select("*").order("name");
        setCategories(cats ?? CATEGORIES_FILE);
      } catch(e){ setCategories(CATEGORIES_FILE); }
      setLoading(false);
    })();
  },[id]);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let image_url = product.image_url;
      if (imageFile) {
        const compressed = await compressImageFile(imageFile);
        const fileName = `${Date.now()}_${Math.random().toString(36).slice(2,8)}.jpg`;
        const { data: uploadData, error: uploadErr } = await supabase.storage.from("product-images").upload(fileName, compressed);
        if (uploadErr) throw uploadErr;
        const { data: urlData } = await supabase.storage.from("product-images").getPublicUrl(uploadData.path);
        image_url = urlData.publicUrl ?? urlData.publicURL;
      }
      const { error } = await supabase.from("products").update({
        name: product.name,
        category: product.category,
        sub: product.sub,
        price: product.price,
        description: product.description,
        image_url,
      }).eq("id", id);
      if (error) throw error;
      nav("/admin");
    } catch (err) {
      alert("Gagal menyimpan: " + (err.message || JSON.stringify(err)));
      console.error(err);
    } finally { setLoading(false); }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (!product) return <div className="p-6">Produk tidak ditemukan.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Produk</h2>
      <form onSubmit={handleSave} className="space-y-4">
        <input value={product.name} onChange={(e)=>setProduct({...product, name: e.target.value})} className="w-full p-3 border rounded" />
        <select value={product.category} onChange={(e)=>setProduct({...product, category: e.target.value})} className="w-full p-3 border rounded">
          <option value="">— Pilih kategori —</option>
          {categories.map(c => <option key={c.slug ?? c.name} value={c.slug ?? c.name}>{c.name ?? c.name}</option>)}
        </select>
        <input value={product.price ?? ""} onChange={(e)=>setProduct({...product, price: e.target.value})} className="w-full p-3 border rounded" />
        <textarea value={product.description ?? ""} onChange={(e)=>setProduct({...product, description: e.target.value})} className="w-full p-3 border rounded" rows={4} />
        <div>
          <label className="block mb-2">Ganti gambar (opsional)</label>
          <input type="file" accept="image/*" onChange={(e)=>setImageFile(e.target.files?.[0] || null)} />
        </div>
        <div>
          <button className="px-4 py-2 bg-rose-600 text-white rounded">Simpan Perubahan</button>
        </div>
      </form>
    </div>
  );
}
