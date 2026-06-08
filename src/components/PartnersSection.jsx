const PartnersSection = () => {
  return (
    <section className="bg-white py-[70px]">

      <div className="max-w-[900px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-[22px] font-bold text-[#222]">
          Our Partners
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mt-14">

          <div
            className="
            text-gray-400
            font-semibold
            text-[20px]
            cursor-pointer
            transition-all
            duration-300
            hover:text-black
            hover:scale-110
          "
          >
            logoipsum
          </div>

          <div
            className="
            text-gray-400
            font-semibold
            text-[20px]
            cursor-pointer
            transition-all
            duration-300
            hover:text-black
            hover:scale-110
          "
          >
            logoipsum
          </div>

          <div
            className="
            text-gray-400
            font-semibold
            text-[20px]
            cursor-pointer
            transition-all
            duration-300
            hover:text-black
            hover:scale-110
          "
          >
            logoipsum
          </div>

          <div
            className="
            text-gray-400
            font-semibold
            text-[20px]
            cursor-pointer
            transition-all
            duration-300
            hover:text-black
            hover:scale-110
          "
          >
            logoipsum
          </div>

        </div>

      </div>

    </section>
  );
};

export default PartnersSection;