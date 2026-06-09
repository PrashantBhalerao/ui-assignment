import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    review:
      "Working with this team completely transformed our online presence. Their attention to detail and commitment to quality exceeded our expectations.",
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    review:
      "The project was delivered on time and the results were outstanding. We've seen a significant increase in user engagement and conversions.",
  },
];

const TestimonialsSection = () => {
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
            TESTIMONIALS
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-gray-600 max-w-[650px] mx-auto">
            Trusted by businesses worldwide to create exceptional
            digital experiences and measurable growth.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 mt-16">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="
                flex-1
                bg-white/80
                backdrop-blur-sm
                border
                border-gray-100
                rounded-3xl
                p-8
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              {/* Stars */}
              <div className="flex gap-1 mb-5">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#FBBF24"
                    color="#FBBF24"
                  />
                ))}

              </div>

              {/* Review */}
              <p className="text-gray-600 leading-8">
                "{item.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-14
                    h-14
                    rounded-full
                    object-cover
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                />

                <div>

                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TestimonialsSection;