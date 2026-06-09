import { motion } from "framer-motion";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    category: "Technology",
    title: "How AI Is Transforming Modern Businesses",
    desc: "Discover how artificial intelligence is helping companies automate workflows and improve customer experiences.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    category: "Marketing",
    title: "Top Digital Marketing Trends For 2026",
    desc: "Learn the latest strategies businesses are using to attract and retain customers online.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    category: "Startup",
    title: "Building A Startup That Scales Successfully",
    desc: "Essential lessons every founder should know before growing their business rapidly.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-slate-50">

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
            OUR BLOG
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Latest Insights & Articles
          </h2>

          <p className="mt-4 text-gray-600 max-w-[650px] mx-auto">
            Stay updated with industry trends, business insights,
            and expert strategies to help your company grow.
          </p>

        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-3
                hover:shadow-2xl
                cursor-pointer
              "
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                    h-[220px]
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    hover:scale-110
                  "
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <span
                  className="
                    inline-block
                    bg-blue-100
                    text-blue-600
                    text-xs
                    font-medium
                    px-3
                    py-1
                    rounded-full
                  "
                >
                  {blog.category}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {blog.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {blog.desc}
                </p>

                <button
                  className="
                    mt-5
                    text-blue-600
                    font-semibold
                    transition-all
                    duration-300
                    hover:translate-x-2
                  "
                >
                  Read More →
                </button>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">

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
            View All Articles
          </button>

        </div>

      </div>

    </section>
  );
};

export default BlogSection;