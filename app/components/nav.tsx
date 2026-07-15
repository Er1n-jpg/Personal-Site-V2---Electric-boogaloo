import { Link, NavLink } from "react-router";



export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-50 px-8 py-4">
      <div className="flex items-center justify-end max-w-6xl mx-auto text-2xl">
        <div className="flex gap-10">

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-[#304076] hover:text-[#9DAFE9] transition-colors font-jersey ${
                isActive ? "text-[#9DAFE9]" : ""
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink 
            to="/about"
            className ={({ isActive }) =>
              `text-[#304076] font-jersey hover:text-[#9DAFE9] transition-colors ${
                isActive ? "text-[#9DAFE9]" : ""
              }`
          }
          >
            About
          </NavLink>

        <NavLink 
            to="/blog"
            className ={({ isActive }) =>
              `text-[#304076] font-jersey hover:text-[#9DAFE9] transition-colors ${
                isActive ? "text-[#9DAFE9]" : ""
              }`
          }
          >
            Blog
          </NavLink>

                    
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[#304076] transition-colors font-jersey ${
                isActive ? "text-[#9DAFE9]" : ""
              }`
            }
          >
            !!!
          </NavLink>

        </div>
      </div>
    </nav>
  );
} 