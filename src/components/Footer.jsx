import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-[60px] border-t border-gray-200">

      <div className="max-w-[1000px] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Logo Column */}
          <div>

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-black
                flex
                items-center
                justify-center
                cursor-pointer
                transition-all
                duration-300
                hover:scale-110
              "
            >
              <div className="w-5 h-5 border-2 border-white rounded-full"></div>
            </div>

            <p className="text-[11px] text-gray-500 mt-4 leading-5">
              Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint.
            </p>

          </div>

          {/* Column 1 */}
          <div>

            <h3 className="font-semibold text-[13px] mb-4">
              Heading
            </h3>

            <ul className="space-y-2 text-[11px] text-gray-500">

              <li className="hover:text-black transition-all duration-300 cursor-pointer">
                Link Here
              </li>

              <li className="hover:text-black transition-all duration-300 cursor-pointer">
                Link Here
              </li>

              <li className="hover:text-black transition-all duration-300 cursor-pointer">
                Link Here
              </li>

              <li className="hover:text-black transition-all duration-300 cursor-pointer">
                Link Here
              </li>

            </ul>

          </div>

          {/* Column 2 */}
          <div>

            <h3 className="font-semibold text-[13px] mb-4">
              Heading
            </h3>

            <ul className="space-y-2 text-[11px] text-gray-500">

              <li className="hover:text-black transition-all duration-300 cursor-pointer">
                Link Here
              </li>

              <li className="hover:text-black transition-all duration-300 cursor-pointer">
                Link Here
              </li>

              <li className="hover:text-black transition-all duration-300 cursor-pointer">
                Link Here
              </li>

              <li className="hover:text-black transition-all duration-300 cursor-pointer">
                Link Here
              </li>

            </ul>

          </div>

          {/* Column 3 */}
          <div>

            <h3 className="font-semibold text-[13px] mb-4">
              Heading
            </h3>

            <ul className="space-y-2 text-[11px] text-gray-500">

              <li className="hover:text-black transition-all duration-300 cursor-pointer">
                Link Here
              </li>

              <li className="hover:text-black transition-all duration-300 cursor-pointer">
                Link Here
              </li>

              <li className="hover:text-black transition-all duration-300 cursor-pointer">
                Link Here
              </li>

              <li className="hover:text-black transition-all duration-300 cursor-pointer">
                Link Here
              </li>

            </ul>

          </div>

          {/* Social */}
          <div>

            <h3 className="font-semibold text-[13px] mb-4">
              Connect With Us
            </h3>

            <div className="flex gap-3">

              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black hover:text-white hover:scale-110">
                <Facebook size={14} />
              </div>

              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black hover:text-white hover:scale-110">
                <Twitter size={14} />
              </div>

              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black hover:text-white hover:scale-110">
                <Linkedin size={14} />
              </div>

              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black hover:text-white hover:scale-110">
                <Instagram size={14} />
              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;