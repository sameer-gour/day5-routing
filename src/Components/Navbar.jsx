
import { Link } from 'react-router'
function Navbar() {
  return (
    <div className='w-[100vw] h-20 bg-blue-400 p-5 flex justify-between text-3xl'>


    <div>
        <h1>Sham Gour</h1>
    </div>
       
       <div className='flex  justify-between w-1/3 '>
         <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/about">About</Link>
      <Link to="/coures">Coures</Link>
      
       </div>
    </div>
  )
}

export default Navbar