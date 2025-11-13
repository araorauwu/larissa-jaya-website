// src/routes/AdminAddProduct.jsx
import { useState } from "react";
import { supabase } from "../lib/supabaseClient.js";

export default function AdminAddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  const uploadImage = async (file) => {
    if (!file) return null;
    const fileName = `${Date.now()}_${file.name}`;
    const { data: uploadData, error: uploadErr } = await supabase.storage
      .from("product-images")
      .upload(fileName, file, { cacheControl: "3600", upsert: false });

    if (uploadErr) throw uploadErr;

    // getPublicUrl returns { data: { publicUrl } } in v2
    const { data: urlData } = await supabase.storage.from("product-images").getPublicUrl(uploadData.path);
    const publicUrl = urlData?.publicUrl ?? urlData?.publicURL ?? null;
    return publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Menyimpan...");
    try {
      const image_url = imageFile ? await uploadImage(imageFile) : null;

      const { data, error } = await supabase
        .from("products")
        .insert([{
          name,
          category,
          price: price ? parseFloat(price) : null,
          description: desc,
          image_url,
        }]);

      if (error) throw error;
      setMessage("Produk berhasil ditambahkan ✅");
      setName(""); setCategory(""); setPrice(""); setDesc(""); setImageFile(null);
    } catch (err) {
      console.error(err);
      setMessage("Error: " + (err.message || JSON.stringify(err)));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Tambah Produk</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Nama produk" className="w-full p-3 border" required />
        <input value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Kategori" className="w-full p-3 border" />
        <input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Harga" className="w-full p-3 border" />
        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Deskripsi" className="w-full p-3 border" />
        <input type="file" accept="image/*" onChange={(e)=>setImageFile(e.target.files?.[0] || null)} />
        <div>
          <button type="submit" className="px-4 py-2 bg-rose-600 text-white rounded">Simpan</button>
        </div>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}
