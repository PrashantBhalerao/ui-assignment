const Hero = () => {
return ( <section className="bg-[#f3f3f3]"> <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 min-h-[540px]">

    {/* Left Content */}
    <div className="flex flex-col justify-center px-10 lg:px-16">

      <h1 className="text-[56px] font-bold leading-[1.15] text-[#222] max-w-[380px]">
        Great design is invisible
      </h1>

      <p className="mt-6 text-[#6b7280] text-lg">
        Lorem ipsum dolor sit amet consectetur
      </p>

      <button
        className="
        mt-8
        w-fit
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

    {/* Right Placeholder */}
    <div
      className="
      relative
      bg-[#dcdcdc]
      border-l
      border-[#cfcfcf]
      transition-all
      duration-500
      hover:bg-[#d6d6d6]
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
          strokeWidth="0.2"
        />

        <line
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          stroke="#bdbdbd"
          strokeWidth="0.2"
        />
      </svg>

    </div>

  </div>
</section>


);
};

export default Hero;
