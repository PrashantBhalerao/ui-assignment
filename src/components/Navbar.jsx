import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "Services",
    "About",
    "Blog",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">

      <div className="max-w-[1200px] mx-auto px-6">

        <div className="h-[80px] flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">

            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              P
            </div>

            <h1 className="font-bold text-xl text-slate-900">
              Prism
            </h1>

          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <li
                key={link}
                className="
                  text-gray-600
                  font-medium
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:text-blue-600
                "
              >
                {link}
              </li>
            ))}

          </ul>

          {/* Desktop Button */}
          <button
            className="
              hidden md:block
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-xl
              font-medium
              transition-all
              duration-300
              hover:bg-blue-700
              hover:scale-105
            "
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">

          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="
                  text-gray-600
                  font-medium
                  transition-all
                  duration-300
                  hover:text-blue-600
                "
              >
                {link}
              </a>
            ))}

            <button
              className="
                mt-2
                bg-blue-600
                text-white
                py-3
                rounded-xl
                font-medium
              "
            >
              Get Started
            </button>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;