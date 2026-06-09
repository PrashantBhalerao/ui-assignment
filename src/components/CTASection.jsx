import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-[1200px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600
            px-8
            md:px-16
            py-16
            shadow-2xl
          "
        >

          {/* Background Blur Effects */}

          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Content */}

            <div>

              <span className="text-white/80 font-medium">
                READY TO GET STARTED?
              </span>

              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
                Let's Build Something
                <br />
                Amazing Together
              </h2>

              <p className="mt-5 text-white/80 max-w-[550px] leading-8">
                Whether you're launching a startup, scaling a business,
                or transforming your digital presence, our team is
                ready to help you achieve your goals.
              </p>

            </div>

            {/* CTA Button */}

            <button
              className="
                group
                bg-white
                text-slate-900
                px-8
                py-4
                rounded-2xl
                font-semibold
                flex
                items-center
                gap-3
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-2xl
              "
            >
              Get Started

              <ArrowRight
                size={18}
                className="
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CTASection;