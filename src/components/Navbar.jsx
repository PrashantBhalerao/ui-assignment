const Navbar = () => {
return ( <nav className="bg-white border-b border-gray-200"> <div className="max-w-[1200px] mx-auto h-[80px] flex items-center justify-between px-8">

    {/* Logo */}
    <div className="text-[28px] font-bold cursor-pointer transition-all duration-300 hover:scale-105">
      Logo
    </div>

    {/* Links */}
    <ul className="hidden md:flex gap-12 text-sm">

      <li className="cursor-pointer transition-all duration-300 hover:text-gray-500">
        Link 1
      </li>

      <li className="cursor-pointer transition-all duration-300 hover:text-gray-500">
        Link 2
      </li>

      <li className="cursor-pointer transition-all duration-300 hover:text-gray-500">
        Link 3
      </li>

      <li className="cursor-pointer transition-all duration-300 hover:text-gray-500">
        Link 4
      </li>

      <li className="cursor-pointer transition-all duration-300 hover:text-gray-500">
        Link 5
      </li>

    </ul>

    {/* Button */}
    <button
      className="
      bg-black
      text-white
      px-8
      py-3
      text-sm
      transition-all
      duration-300
      hover:bg-[#333]
      hover:scale-105
      active:scale-95
    "
    >
      Button
    </button>

  </div>
</nav>


);
};

export default Navbar;
