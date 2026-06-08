import { Plus, Minus } from "lucide-react";

const FaqSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-[70px]">

      <div className="max-w-[1000px] mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Placeholder */}
          <div
            className="
              relative
              w-full
              max-w-[320px]
              h-[320px]
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

          {/* FAQ Content */}
          <div>

            <h2 className="text-[22px] font-bold text-[#222] mb-6">
              Frequently Asked Questions
            </h2>

            {/* Open FAQ */}
            <div
              className="
                bg-white
                border
                border-gray-200
                transition-all
                duration-300
                hover:shadow-md
              "
            >

              <div className="flex justify-between items-center px-4 py-4">

                <h4 className="text-[13px] font-medium">
                  Lorem ipsum dolor sit amet consectetur
                </h4>

                <Minus
                  size={16}
                  className="
                    transition-all
                    duration-300
                    hover:scale-125
                  "
                />

              </div>

              <div className="px-4 pb-4">

                <p className="text-[12px] text-gray-500 leading-6">
                  Lorem ipsum dolor sit amet consectetur.
                  Pulvinar accumsan in at sodales condimentum.
                  Gravida dui aliquet mauris vel velit.
                  Tellus felis sed pretium egestas.
                </p>

              </div>

            </div>

            {/* FAQ 2 */}
            <div
              className="
                bg-white
                border
                border-gray-200
                border-t-0
                transition-all
                duration-300
                hover:bg-gray-50
                cursor-pointer
              "
            >

              <div className="flex justify-between items-center px-4 py-4">

                <h4 className="text-[13px]">
                  Lorem ipsum dolor sit amet consectetur
                </h4>

                <Plus
                  size={16}
                  className="
                    transition-all
                    duration-300
                    hover:rotate-90
                  "
                />

              </div>

            </div>

            {/* FAQ 3 */}
            <div
              className="
                bg-white
                border
                border-gray-200
                border-t-0
                transition-all
                duration-300
                hover:bg-gray-50
                cursor-pointer
              "
            >

              <div className="flex justify-between items-center px-4 py-4">

                <h4 className="text-[13px]">
                  Lorem ipsum dolor sit amet consectetur
                </h4>

                <Plus
                  size={16}
                  className="
                    transition-all
                    duration-300
                    hover:rotate-90
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FaqSection;