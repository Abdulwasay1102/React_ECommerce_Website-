import { Button } from "@/Components/ui/button"
import { Rocket, Lightbulb } from "lucide-react";
import Aboutus from "@/assets/images/Aboutus.jpg"

const AboutUs = () => {
  return (
<section className="mt-0 pt-0 min-h-screen " >
  <div className="py-16 px-6 md:px-16 lg:px-24 max-w-[1200px] mx-auto">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-serif mb-12">
        About Us
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h3 className="text-2xl md:text-3xl font-serif mb-4">
            We Help To Get Solutions
          </h3>

          <p className="text-gray-700 mb-8 max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>

          {/* Icons Section */}
          <div className="flex gap-10 mb-10">
            <div>
              <Rocket className="w-10 h-10 mb-3 text-black" />
              <h4 className="font-serif text-lg">Lorem Ipsum</h4>
              <p className="text-sm text-gray-700 max-w-[200px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            <div>
              <Lightbulb className="w-10 h-10 mb-3 text-black" />
              <h4 className="font-serif text-lg">Lorem Ipsum</h4>
              <p className="text-sm text-gray-700 max-w-[200px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

          {/* Button */}
          <Button className="bg-black text-white rounded-full px-8 py-6 text-sm tracking-widest">
            OUR TEAM
          </Button>
        </div>

        {/* Right Side */}
        <div className="relative">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={Aboutus}
              alt="about"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card */}
          <div className="md:absolute relative  md:-bottom-10 left-1/2 -translate-x-1/2 bg-[#E8D8CC] border rounded-2xl p-6 w-[80%] shadow-md text-center">
            <p className="text-sm text-gray-700 mb-2">
              Lorem Ipsum is simply dummy
            </p>
            <h4 className="font-serif text-lg mb-2">LOOKING FOR HELP?</h4>
            <p className="text-sm text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;