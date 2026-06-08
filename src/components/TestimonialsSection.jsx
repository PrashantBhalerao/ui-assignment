const TestimonialsSection = () => {
  return (
    <section className="bg-white py-[70px]">

      <div className="max-w-[1000px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-[22px] font-bold text-[#222]">
          Our Happy Clients
        </h2>

        {/* Testimonials */}
        <div className="flex items-center justify-center gap-6 mt-12">

          {/* Left Arrow */}
          <button
            className="
              text-gray-400
              text-2xl
              transition-all
              duration-300
              hover:text-black
              hover:scale-125
            "
          >
            ‹
          </button>

          {/* Card 1 */}
          <div
            className="
              w-[360px]
              bg-[#f7f7f7]
              p-5
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-lg
            "
          >

            <p className="text-[11px] text-gray-500 leading-5">
              Lorem ipsum dolor sit amet consectetur. Condimentum
              eget erat id sed urna et quis interdum. Blandit
              mattis nibh rhoncus non, nec leo dui vulputate.
              Morbi pellentesque eu mauris. Nulla facilisi.
            </p>

            <div className="flex items-center gap-3 mt-5">

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-gray-300
                  transition-all
                  duration-300
                  hover:scale-110
                "
              />

              <div>
                <h4 className="text-[12px] font-semibold">
                  Jacqueline Wright
                </h4>

                <p className="text-[10px] text-gray-500">
                  Customer
                </p>
              </div>

            </div>

          </div>

          {/* Card 2 */}
          <div
            className="
              w-[360px]
              bg-[#f7f7f7]
              p-5
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-lg
            "
          >

            <p className="text-[11px] text-gray-500 leading-5">
              Lorem ipsum dolor sit amet consectetur. Condimentum
              eget erat id sed urna et quis interdum. Blandit
              mattis nibh rhoncus non, nec leo dui vulputate.
              Morbi pellentesque eu mauris. Nulla facilisi.
            </p>

            <div className="flex items-center gap-3 mt-5">

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-gray-300
                  transition-all
                  duration-300
                  hover:scale-110
                "
              />

              <div>
                <h4 className="text-[12px] font-semibold">
                  Jacqueline Wright
                </h4>

                <p className="text-[10px] text-gray-500">
                  Customer
                </p>
              </div>

            </div>

          </div>

          {/* Right Arrow */}
          <button
            className="
              text-gray-400
              text-2xl
              transition-all
              duration-300
              hover:text-black
              hover:scale-125
            "
          >
            ›
          </button>

        </div>

      </div>

    </section>
  );
};

export default TestimonialsSection;