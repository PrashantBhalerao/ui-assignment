import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Briefcase,
  Star,
} from "lucide-react";

const StrategySection = () => {
  const stats = [
    {
      icon: <Users size={24} />,
      value: "12K+",
      title: "Happy Clients",
    },
    {
      icon: <TrendingUp size={24} />,
      value: "55%",
      title: "Annual Growth",
    },
    {
      icon: <Briefcase size={24} />,
      value: "5K+",
      title: "Projects Delivered",
    },
    {
      icon: <Star size={24} />,
      value: "98%",
      title: "Positive Ratings",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <span className="text-blue-600 font-semibold">
            BUSINESS GROWTH
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Helping Businesses Scale Globally
          </h2>

          <p className="mt-4 text-gray-600 max-w-[700px] mx-auto">
            We combine strategy, innovation, and technology to
            accelerate business growth and deliver measurable
            results for companies around the world.
          </p>

        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              <div className="text-blue-600">
                {item.icon}
              </div>

              <h3 className="mt-4 text-3xl font-bold text-slate-900">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              shadow-2xl
            "
          >

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600"
              alt="Analytics Dashboard"
              className="
                w-full
                h-[500px]
                object-cover
                transition-all
                duration-700
                hover:scale-105
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/50
                via-black/10
                to-transparent
              "
            />

            {/* Floating Card */}
            <div
              className="
                absolute
                bottom-8
                left-8
                bg-white
                rounded-2xl
                p-5
                shadow-xl
              "
            >
              <h4 className="font-bold text-slate-900">
                Revenue Growth
              </h4>

              <p className="text-green-600 font-semibold mt-1">
                +48.2% this year
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default StrategySection;