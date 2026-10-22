import Navbar from "./Components/Navbar"
import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Product from "./Pages/Product"
import Notfound from "./Pages/Notfound"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Coures from "./Pages/Coures"
import CouresDetles from "./Pages/CouresDetles"

export default function App() {
  return (
    <div className='bg-zinc-800 h-[100vh] w-[100vw] text-white'>
      <Navbar />
 <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>

        <Route path="/about" element={<About />} />

        <Route path="/coures" element={<Coures />} />
        <Route path="/Coures/:id" element={<CouresDetles />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    
    </div>
  )
}
