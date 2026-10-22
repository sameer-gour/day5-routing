
import { Link, useNavigate } from 'react-router'
function Navbar() {
  const nav = useNavigate()
  return (
    <div className='w-[100vw] h-20 bg-blue-400 p-5 flex justify-between text-3xl'>


    <div>
        <h1>Sham Gour     
          
          <button onClick={()=>{nav(-1)}}> - </button>
          <button onClick={()=>{nav(+1)}}> + </button>
        </h1>
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