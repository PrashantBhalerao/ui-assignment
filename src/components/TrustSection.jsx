import { CircleCheck } from "lucide-react";

const TrustSection = () => {
  const points = [
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
  ];

  return (
    <section className="bg-white py-[70px]">
      <div className="max-w-[1000px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-[22px] md:text-[24px] font-bold text-[#222]">
          Why our clients trust us
        </h2>

        <p className="text-center text-[12px] text-gray-500 max-w-[650px] mx-auto mt-5 leading-6">
          Lorem ipsum dolor sit amet consectetur. Donec rutrum nibh tortor sed.
          Suspendisse lobortis erat quis vehicula pellentesque sit id.
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-14">

          {/* Left Images */}
          <div className="flex flex-col items-center">

            <div className="flex gap-4">

              {/* Image 1 */}
              <div
                className="
                relative
                w-[180px]
                h-[130px]
                bg-[#dddddd]
                border
                border-[#cfcfcf]
                transition-all
                duration-300
                hover:scale-105
              "
              >
                <svg
                  className="absolute inset-0 w-full h-full"
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

              {/* Image 2 */}
              <div
                className="
                relative
                w-[90px]
                h-[130px]
                bg-[#dddddd]
                border
                border-[#cfcfcf]
                transition-all
                duration-300
                hover:scale-105
              "
              >
                <svg
                  className="absolute inset-0 w-full h-full"
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

            </div>

            {/* Bottom Image */}
            <div
              className="
              relative
              w-[160px]
              h-[110px]
              bg-[#dddddd]
              border
              border-[#cfcfcf]
              mt-5
              -ml-20
              transition-all
              duration-300
              hover:scale-105
            "
            >
              <svg
                className="absolute inset-0 w-full h-full"
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

          </div>

          {/* Right Side */}
          <div>

            {points.map((point, index) => (
              <div
                key={index}
                className="
                flex
                gap-3
                mb-6
                transition-all
                duration-300
                hover:translate-x-2
              "
              >
                <CircleCheck
                  size={18}
                  className="text-green-500 mt-1"
                />

                <div>
                  <p className="font-medium text-[14px]">
                    {point}
                  </p>

                  <p className="text-gray-500 text-[13px] mt-1">
                    Elementum nisi duis tortor sed.
                  </p>
                </div>
              </div>
            ))}

            <button
              className="
              mt-6
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

      </div>
    </section>
  );
};

export default TrustSection;