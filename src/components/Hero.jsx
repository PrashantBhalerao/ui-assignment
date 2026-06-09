import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-10 lg:pt-0">

      {/* Background Effects */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

      <div
        className="
        max-w-[1200px]
        mx-auto
        px-5
        min-h-[90vh]
        grid
        lg:grid-cols-2
        items-center
        gap-12
      "
      >
        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span
            className="
            inline-flex
            items-center
            gap-2
            bg-blue-100
            text-blue-700
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
          "
          >
            🚀 Digital Agency
          </span>

          <h1
            className="
            mt-6
            text-4xl
            sm:text-5xl
            lg:text-7xl
            font-extrabold
            leading-tight
            text-slate-900
          "
          >
            Build Stunning
            <br />

            <span className="text-blue-600">
              Digital Products
            </span>

            <br />

            That Drive Growth
          </h1>

          <p
            className="
            mt-6
            text-gray-600
            text-base
            md:text-lg
            leading-7
            max-w-[550px]
          "
          >
            We help startups and businesses create beautiful
            digital products that attract customers,
            increase engagement, and grow revenue.
          </p>

          {/* Buttons */}

          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-8
          "
          >
            <button
              className="
              bg-blue-600
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              transition-all
              duration-300
              hover:bg-blue-700
              hover:scale-105
            "
            >
              Get Started
              <ArrowRight size={18} />
            </button>

            <button
              className="
              border
              border-gray-300
              px-8
              py-4
              rounded-xl
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              transition-all
              duration-300
              hover:bg-white
              hover:shadow-lg
            "
            >
              <PlayCircle size={18} />
              Learn More
            </button>
          </div>

          {/* Stats */}

          <div
            className="
            grid
            grid-cols-3
            gap-6
            mt-12
            max-w-[500px]
          "
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                250+
              </h3>

              <p className="text-gray-500 text-sm">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                120+
              </h3>

              <p className="text-gray-500 text-sm">
                Clients
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                98%
              </h3>

              <p className="text-gray-500 text-sm">
                Satisfaction
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200"
            alt="Team Working"
            className="
            w-full
            h-[250px]
            sm:h-[400px]
            lg:h-[550px]
            object-cover
            rounded-3xl
            shadow-2xl
          "
          />

          {/* Floating Card */}

          <div
            className="
            absolute
            -bottom-6
            left-4
            lg:left-10
            bg-white
            p-4
            rounded-2xl
            shadow-xl
          "
          >
            <p className="text-gray-500 text-sm">
              Monthly Growth
            </p>

            <h3 className="text-2xl font-bold text-green-600">
              +38%
            </h3>
          </div>

          <div
            className="
            absolute
            top-4
            right-4
            bg-white
            p-4
            rounded-2xl
            shadow-xl
          "
          >
            <p className="text-gray-500 text-sm">
              Active Users
            </p>

            <h3 className="text-2xl font-bold text-blue-600">
              12K+
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;