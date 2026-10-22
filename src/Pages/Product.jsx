
import { Link, Outlet } from "react-router";

function Product() {
  return (
    <div className="w-full p-6">
      {/* Men / Women Navigation */}
      <nav className="flex items-center gap-6 bg-blue-400 p-4 rounded-xl">
        <Link to="Men" className="font-semibold hover:text-zinc-800">
          Men
        </Link>

        <Link to="Women" className="font-semibold hover:text-zinc-800">
          Women
        </Link>
      </nav>

      {/* Child Page Content */}
      <div className="mt-6 w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Product;
