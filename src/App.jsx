import Navbar from "./Components/Navbar"
import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Product from "./Pages/Product"
import Notfound from "./Pages/Notfound"
import Men from "./Pages/Men"
import Women from "./Pages/Women"

export default function App() {
  return (
    <div className='bg-zinc-800 h-[100vh] w-[100vw] text-white'>
      <Navbar />
<Routes>
  <Route  path="/Home" element={<Home/>}/>
 
  <Route path="/Product" element={<Product />}>
  <Route path="Men" element={<Men />} />
  <Route path="Women" element={<Women />} />
</Route>
  <Route  path="/About" element={<About/>}/>
  <Route  path="*" element={<Notfound/>}/>
 
</Routes>
    
    </div>
  )
}
