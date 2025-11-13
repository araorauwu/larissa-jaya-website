// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./routes/Home";
import Catalog from "./routes/Catalog";
import Category from "./routes/Category";
import Contact from "./routes/Contact";
import Links from "./routes/Links";
import About from "./routes/About";

import AdminLogin from "./routes/AdminLogin";
import AdminDashboard from "./routes/AdminDashboard";
import AdminAddProduct from "./routes/AdminAddProduct";

import RequireAuth from "./components/RequireAuth";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          {/* Halaman publik */}
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Catalog />} />
          <Route path="/kategori/:slug" element={<Category />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/tautan" element={<Links />} />
          <Route path="/about" element={<About />} />

          {/* Halaman login admin */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Area admin (dilindungi) */}
          <Route
            path="/admin"
            element={
              <RequireAuth adminOnly={true}>
                <AdminDashboard />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/add-product"
            element={
              <RequireAuth adminOnly={true}>
                <AdminAddProduct />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
