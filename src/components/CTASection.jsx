const CTASection = () => {
  return (
    <section className="bg-white py-[70px]">

      <div className="max-w-[1200px] mx-auto px-6">

        <div
          className="
            bg-[#222]
            px-12
            py-10
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-6
            transition-all
            duration-500
            hover:shadow-2xl
          "
        >

          {/* Content */}
          <div>

            <h2 className="text-white text-[24px] font-semibold">
              Need more information?
            </h2>

            <p className="text-gray-300 text-[12px] mt-3 leading-6 max-w-[450px]">
              Write your concern to us and our specialist
              will get back to you with the best solution.
            </p>

          </div>

          {/* Button */}
          <button
            className="
              bg-white
              text-black
              px-8
              py-3
              text-sm
              font-medium
              transition-all
              duration-300
              hover:bg-gray-100
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

export default CTASection;