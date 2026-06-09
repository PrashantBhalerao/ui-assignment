import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-[1200px] mx-auto px-6 min-h-[90vh] grid md:grid-cols-2 items-center gap-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity:0, x:-50 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
        >

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            🚀 Digital Agency
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Build Digital
            <span className="text-blue-600"> Experiences</span>
            <br />
            That Users Love
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8 max-w-[550px]">
            We help startups and businesses create
            beautiful digital products that attract
            customers, increase engagement and grow revenue.
          </p>

          <div className="flex gap-4 mt-8">

            <button
              className="
              bg-blue-600
              text-white
              px-8
              py-4
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

            <button
              className="
              border
              border-gray-300
              px-8
              py-4
              rounded-xl
              font-medium
              transition-all
              duration-300
              hover:bg-white
              hover:shadow-lg
            "
            >
              Learn More
            </button>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity:0, x:50 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          className="relative"
        >

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000"
            alt="Team Working"
            className="
              rounded-3xl
              shadow-2xl
              w-full
              object-cover
              hover:scale-[1.02]
              transition-all
              duration-500
            "
          />

          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl">
            <h3 className="font-bold text-2xl text-blue-600">
              12K+
            </h3>

            <p className="text-sm text-gray-500">
              Happy Clients
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;