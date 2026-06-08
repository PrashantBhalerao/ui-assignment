const BlogSection = () => {
  const blogs = [1, 2, 3];

  return (
    <section className="bg-[#f5f5f5] py-[70px]">

      <div className="max-w-[1000px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-[22px] font-bold text-[#222]">
          Latest Blog
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

          {blogs.map((blog) => (
            <div
              key={blog}
              className="
                group
                transition-all
                duration-300
                hover:-translate-y-2
                cursor-pointer
              "
            >

              {/* Image */}
              <div
                className="
                  relative
                  h-[160px]
                  bg-[#dddddd]
                  border
                  border-[#cfcfcf]
                  overflow-hidden
                "
              >
                <svg
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    transition-all
                    duration-500
                    group-hover:scale-105
                  "
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="100"
                    stroke="#bdbdbd"
                    strokeWidth="0.3"
                  />

                  <line
                    x1="100"
                    y1="0"
                    x2="0"
                    y2="100"
                    stroke="#bdbdbd"
                    strokeWidth="0.3"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="mt-4">

                <h3 className="text-[14px] font-semibold text-[#222]">
                  Humans are much more smarter than AI
                </h3>

                <p className="text-[12px] text-gray-500 mt-2 leading-5">
                  Lorem ipsum dolor sit amet consectetur.
                  Lorem ipsum dolor sit amet consectetur.
                </p>

                <button
                  className="
                    mt-4
                    text-[12px]
                    font-medium
                    transition-all
                    duration-300
                    hover:text-black
                    hover:translate-x-1
                  "
                >
                  Learn More →
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-12">

          <button
            className="
              bg-black
              text-white
              px-8
              py-3
              text-sm
              transition-all
              duration-300
              hover:bg-[#333]
              hover:scale-105
              active:scale-95
            "
          >
            Button
          </button>

        </div>

      </div>

    </section>
  );
};

export default BlogSection;