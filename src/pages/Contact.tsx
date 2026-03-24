import { Button } from "@/Components/ui/button";

const ContactUs = () => {
  return (
    // Background color matches the light peach/cream tone in the image
    <section className="w-full min-h-screen py-20 flex flex-col items-center justify-center font-serif">
      
      {/* Title Section */}
      <div className="text-center mb-12 ">
        <h2 className="text-[42px] font-cormorant text-[#1A1A1A] mb-4 uppercase tracking-tight">
          Contact Us
        </h2>
        <p className="text-[#333333] italic text-lg font-cormorant-infant">
          Any question or remark? just write a message!
        </p>
      </div>

      {/* Main Form Container */}
      <div className="w-full max-w-[700px] px-4">
        <div className="border-[0.5px] border-black rounded-[40px] p-10 md:p-16">
          
          <form>
            {/* Grid Layout for Inputs */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              
              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-xl mb-3 ml-1 text-[#333333] font-cormorant-infant">First Name</label>
                <input
                  type="text"
                  className="bg-transparent border border-black rounded-[15px] px-4 py-6 h-14 focus:outline-none"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-xl mb-3 ml-1 text-[#333333] font-cormorant-infant">last Name</label>
                <input
                  type="text"
                  className="bg-transparent border border-black rounded-[15px] px-4 py-6 h-14 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-xl mb-3 ml-1 text-[#333333] font-cormorant-infant">Email</label>
                <input
                  type="email"
                  className="bg-transparent border border-black rounded-[15px] px-4 py-6 h-14 focus:outline-none"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label className="text-xl mb-3 ml-1 text-[#333333] font-cormorant-infant">Phone number</label>
                <input
                  type="text"
                  className="bg-transparent border border-black rounded-[15px] px-4 py-6 h-14 focus:outline-none"
                />
              </div>
            </div>

            {/* Message Area - Full Width */}
            <div className="flex flex-col mt-8">
              <label className="text-xl mb-3 ml-1 text-[#333333] font-cormorant-infant">Message</label>
              <div className="relative">
                <textarea
                  rows={6}
                  className="w-full bg-transparent border border-black rounded-[15px] px-5 py-5 focus:outline-none resize-none"
                />
                <span className="absolute top-5 left-5 text-gray-400 pointer-events-none italic font-cormorant-infant">
                   Write Your message
                </span>
              </div>
            </div>
          </form>
        </div>

        {/* Submit Button - Positioned outside the border box like in the image */}
        <div className="flex justify-center mt-10">
          <Button 
            className="bg-black text-white rounded-full px-20 py-8 text-lg uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors font-cormorant-infant"
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;