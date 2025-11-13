// src/routes/AdminDashboard.jsx
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function AdminDashboard(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    fetchProducts();
  },[]);

  async function fetchProducts(){
    setLoading(true);
    const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    if (error) console.error(error);
    else setProducts(data || []);
    setLoading(false);
  }

  async function handleDelete(id){
    if (!confirm("Hapus produk ini?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) return alert("Gagal hapus: " + error.message);
    fetchProducts();
  }

  async function handleLogout(){
    await supabase.auth.signOut();
    navigate("/admin-login");
  }

  return (
    <div className="container-narrow p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        <div className="flex gap-3">
          <button onClick={handleLogout} className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">Logout</button>
        </div>
      </div>

      <div className="mb-4 flex gap-3">
        <Link to="/admin/add-product" className="px-4 py-2 bg-rose-600 text-white rounded">Tambah Produk</Link>
        <Link to="/admin/add-store-photo" className="px-4 py-2 border rounded">Tambah Foto Toko</Link>
      </div>

      <section>
        <h2 className="text-lg font-semibold mb-3">Daftar Produk</h2>
        {loading ? <p>Loading...</p> : (
          <div className="space-y-3">
            {products.length === 0 && <div className="text-sm text-gray-500">Belum ada produk.</div>}
            {products.map(p => (
              <div key={p.id} className="p-3 border rounded flex justify-between items-center">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-sm text-gray-500">{p.category} {p.sub ? `• ${p.sub}` : ""} • {p.price ? `Rp ${p.price}` : ""}</div>
                </div>
                <div className="flex gap-2">
                  <Link to={`/admin/edit-product/${p.id}`} className="px-3 py-1 border rounded text-sm">Edit</Link>
                  <button onClick={()=>handleDelete(p.id)} className="px-3 py-1 bg-red-50 text-red-600 border rounded text-sm">Hapus</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
