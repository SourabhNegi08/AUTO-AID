import { Link, useLocation } from "react-router-dom";
import { CarFront, User, Bell } from "lucide-react";

function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/dashboard" },
    { name: "Find Mechanic", path: "/mechanics" },
    { name: "Requests", path: "/request" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="border-b border-zinc-800 bg-[#0b0d0f]/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <div className="bg-orange-500 p-2 rounded-xl">
            <CarFront size={22} />
          </div>

          <span className="text-xl font-bold">
            Auto<span className="text-orange-500">Aid</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition ${
                location.pathname === link.path
                  ? "text-orange-500"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="text-zinc-400 hover:text-white">
            <Bell size={20} />
          </button>

          <Link to="/profile" className="bg-zinc-800 p-2 rounded-full">
            <User size={19} />
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;