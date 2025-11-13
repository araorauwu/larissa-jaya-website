// src/routes/AddStorePhoto.jsx
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

async function compressImageFile(file, maxWidth = 1600, quality = 0.8) {
  // same compress helper as earlier
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
    canvas.toBlob((blob) => res(blob), "image/jpeg", quality);
  });
}

export default function AddStorePhoto(){
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) { setMsg("Pilih file"); return; }
    setMsg("Mengunggah...");
    try {
      const compressed = await compressImageFile(file, 1600, 0.8);
      const fileName = `${Date.now()}_${file.name.replace(/\s+/g,"_")}`;
      const { data: uploadData, error: uploadErr } = await supabase.storage.from("store-images").upload(fileName, compressed);
      if (uploadErr) throw uploadErr;
      const { data: urlData } = await supabase.storage.from("store-images").getPublicUrl(uploadData.path);
      const url = urlData.publicUrl ?? urlData.publicURL;
      const { error } = await supabase.from("store_photos").insert([{ url, caption }]);
      if (error) throw error;
      setMsg("Foto toko berhasil diupload ✅");
      setFile(null); setCaption("");
    } catch (err) {
      console.error(err);
      setMsg("Error: " + (err.message || JSON.stringify(err)));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Tambah Foto Toko (About)</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="file" accept="image/*" onChange={(e)=>setFile(e.target.files?.[0]||null)} />
        <input value={caption} onChange={(e)=>setCaption(e.target.value)} placeholder="Caption (opsional)" className="w-full p-3 border rounded" />
        <button className="px-4 py-2 bg-rose-600 text-white rounded">Upload</button>
      </form>
      {msg && <p className="mt-3">{msg}</p>}
    </div>
  );
}
