import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-xl font-bold">
                P
              </div>

              <h2 className="text-2xl font-bold">
                Prism
              </h2>

            </div>

            <p className="mt-6 text-slate-400 leading-8 max-w-md">
              We help startups and businesses create
              beautiful digital products that drive
              growth, engagement, and long-term success.
            </p>

            {/* Newsletter */}

            <div className="mt-8">

              <h4 className="font-semibold mb-4">
                Subscribe To Newsletter
              </h4>

              <div className="flex flex-col sm:flex-row gap-3">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    flex-1
                    px-4
                    py-3
                    rounded-xl
                    bg-slate-800
                    border
                    border-slate-700
                    outline-none
                    focus:border-blue-500
                  "
                />

                <button
                  className="
                    bg-blue-600
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
                  Subscribe
                </button>

              </div>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-semibold text-lg mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                About Us
              </li>

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                Careers
              </li>

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                Blog
              </li>

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                Contact
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="font-semibold text-lg mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                UI/UX Design
              </li>

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                Web Development
              </li>

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                Mobile Apps
              </li>

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                Branding
              </li>

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="font-semibold text-lg mb-6">
              Support
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                Help Center
              </li>

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                FAQs
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-800">

        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400 text-sm">
            © 2026 Prism. All rights reserved.
          </p>

          <div className="flex gap-4">

            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:scale-110">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:scale-110">
              <FaTwitter />
            </div>

            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:scale-110">
              <FaLinkedinIn />
            </div>

            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:scale-110">
              <FaInstagram />
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;