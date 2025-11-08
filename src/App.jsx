import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './routes/Home'
import Catalog from './routes/Catalog'
import Category from './routes/Category'
import Contact from './routes/Contact'
import Links from './routes/Links'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Catalog />} />
          <Route path="/kategori/:slug" element={<Category />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/tautan" element={<Links />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
