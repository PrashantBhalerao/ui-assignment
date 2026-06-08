const StrategySection = () => {
  return (
    <section className="bg-[#f5f5f5] py-[70px]">

      <div className="max-w-[1000px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-[22px] md:text-[30px] font-bold leading-[1.4] text-[#222] max-w-[650px] mx-auto">
          Our business strategy has helped many
          businesses across the globe
        </h2>

        {/* Description */}
        <p className="text-center text-[12px] text-gray-500 max-w-[600px] mx-auto mt-5 leading-6">
          Lorem ipsum dolor sit amet consectetur.
          Elementum nisi duis tortor sed.
          Suspendisse lobortis vitae quis vehicula
          pellentesque sit id.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          <div
            className="
            text-center
            transition-all
            duration-300
            hover:-translate-y-1
          "
          >
            <h4 className="font-semibold text-[12px]">
              Clients
            </h4>

            <p className="mt-2 text-[18px] font-bold">
              12K
            </p>
          </div>

          <div
            className="
            text-center
            transition-all
            duration-300
            hover:-translate-y-1
          "
          >
            <h4 className="font-semibold text-[12px]">
              Annual Growth
            </h4>

            <p className="mt-2 text-[18px] font-bold">
              55%
            </p>
          </div>

          <div
            className="
            text-center
            transition-all
            duration-300
            hover:-translate-y-1
          "
          >
            <h4 className="font-semibold text-[12px]">
              No Of Projects
            </h4>

            <p className="mt-2 text-[18px] font-bold">
              5K
            </p>
          </div>

          <div
            className="
            text-center
            transition-all
            duration-300
            hover:-translate-y-1
          "
          >
            <h4 className="font-semibold text-[12px]">
              Positive Ratings
            </h4>

            <p className="mt-2 text-[18px] font-bold">
              80%
            </p>
          </div>

        </div>

        {/* Image Placeholder */}
        <div
          className="
          relative
          mt-12
          w-full
          h-[350px]
          bg-[#dddddd]
          border
          border-[#cfcfcf]
          transition-all
          duration-500
          hover:bg-[#d5d5d5]
        "
        >

          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
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

      </div>

    </section>
  );
};

export default StrategySection;