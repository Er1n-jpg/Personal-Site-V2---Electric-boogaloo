import { Link, NavLink } from "react-router";



export default function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-[#1B1E25] z-50 px-8 py-4">
      <div className="flex items-center justify-end max-w-6xl mx-auto text-2xl">
        <div className="flex gap-24">
          
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white font-bold hover:text-[#FF6363] transition-colors font-roboto ${
                isActive ? "text-[#FF6363]" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/design"
            className={({ isActive }) =>
              `text-white font-bold hover:text-[#FF6363] transition-colors font-roboto ${
                isActive ? "text-[#FF6363]" : ""
              }`
            }
          >
            Design
          </NavLink>

          <NavLink 
            to="/art"
            className ={({ isActive }) =>
              `text-white font-roboto font-bold hover:text-[#FF6363] transition-colors ${
                isActive ? "text-[#FF6363]" : ""
              }`
          }
          >
            Art
          </NavLink>
        </div>
      </div>
    </nav>
  );
} 