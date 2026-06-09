import { motion } from "framer-motion";
import {
  FaGoogle,
  FaSpotify,
  FaMicrosoft,
  FaAmazon,
} from "react-icons/fa";

const partners = [
  {
    name: "Google",
    icon: <FaGoogle size={42} />,
  },
  {
    name: "Spotify",
    icon: <FaSpotify size={42} />,
  },
  {
    name: "Microsoft",
    icon: <FaMicrosoft size={42} />,
  },
  {
    name: "Amazon",
    icon: <FaAmazon size={42} />,
  },
];

const PartnersSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-blue-600 font-semibold">
            TRUSTED BY LEADING BRANDS
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Our Partners
          </h2>

          <p className="mt-4 text-gray-600 max-w-[650px] mx-auto">
            We collaborate with innovative companies and industry leaders
            to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Partner Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                bg-slate-50
                rounded-3xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                gap-4
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:bg-blue-50
                cursor-pointer
              "
            >
              <div className="text-slate-700">
                {partner.icon}
              </div>

              <h3 className="font-semibold text-slate-800">
                {partner.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PartnersSection;