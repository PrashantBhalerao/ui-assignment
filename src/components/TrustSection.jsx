import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const TrustSection = () => {
  const features = [
    {
      title: "Experienced Professionals",
      desc: "A skilled team dedicated to delivering high-quality digital solutions."
    },
    {
      title: "Client-Centered Approach",
      desc: "Every project is designed around your business goals and customer needs."
    },
    {
      title: "Fast & Reliable Delivery",
      desc: "We ensure timely delivery without compromising on quality."
    },
    {
      title: "Long-Term Support",
      desc: "Continuous assistance and optimization after project launch."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">

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
            WHY CHOOSE US
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Why Our Clients Trust Us
          </h2>

          <p className="mt-4 text-gray-600 max-w-[700px] mx-auto">
            We combine creativity, technology, and strategy to help businesses
            build memorable digital experiences and achieve measurable growth.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">

          {/* Left Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="grid grid-cols-2 gap-4">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                alt=""
                className="
                  h-[240px]
                  w-full
                  object-cover
                  rounded-3xl
                  shadow-xl
                  hover:scale-105
                  transition-all
                  duration-500
                "
              />

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                alt=""
                className="
                  h-[240px]
                  w-full
                  object-cover
                  rounded-3xl
                  shadow-xl
                  hover:scale-105
                  transition-all
                  duration-500
                "
              />

            </div>

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
              alt=""
              className="
                mt-4
                h-[180px]
                w-[75%]
                object-cover
                rounded-3xl
                shadow-xl
                hover:scale-105
                transition-all
                duration-500
              "
            />

          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {features.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  gap-4
                  mb-8
                  p-4
                  rounded-2xl
                  transition-all
                  duration-300
                  hover:bg-blue-50
                "
              >

                <CheckCircle2
                  className="text-blue-600 mt-1"
                  size={24}
                />

                <div>

                  <h3 className="font-semibold text-lg text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 leading-7">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

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
              Learn More
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default TrustSection;