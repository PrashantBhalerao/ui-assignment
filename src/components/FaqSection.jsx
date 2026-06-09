import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on complexity, but most projects are completed within 2 to 8 weeks."
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We provide ongoing maintenance, support, and performance optimization after deployment."
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. We specialize in modernizing outdated websites while improving user experience and performance."
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work with startups, small businesses, and enterprise clients worldwide."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
              alt="FAQ"
              className="
                rounded-3xl
                shadow-2xl
                w-full
                h-[450px]
                object-cover
                transition-all
                duration-500
                hover:scale-[1.02]
              "
            />

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="text-blue-600 font-semibold">
              FAQ
            </span>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-gray-600">
              Find answers to common questions about our services,
              workflow, and support process.
            </p>

            <div className="mt-10 space-y-4">

              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-2xl
                    border
                    border-gray-100
                    overflow-hidden
                    shadow-sm
                  "
                >

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="
                      w-full
                      flex
                      justify-between
                      items-center
                      p-5
                      text-left
                      transition-all
                      duration-300
                      hover:bg-blue-50
                    "
                  >

                    <span className="font-medium text-slate-800">
                      {faq.question}
                    </span>

                    {activeIndex === index ? (
                      <Minus
                        className="text-blue-600"
                        size={20}
                      />
                    ) : (
                      <Plus
                        className="text-gray-500"
                        size={20}
                      />
                    )}

                  </button>

                  <AnimatePresence>

                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1
                        }}
                        exit={{
                          height: 0,
                          opacity: 0
                        }}
                        transition={{ duration: 0.3 }}
                      >

                        <div className="px-5 pb-5 text-gray-600 leading-7">
                          {faq.answer}
                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default FAQSection;