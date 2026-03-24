import { useState } from "react";
import { User, Mail, Star } from "lucide-react";
import { Button } from "@/Components/ui/button";

const FeedbackForm = () => {
  const [rating, setRating] = useState(4);

  return (
    <section className="w-full min-h-screen py-20 flex flex-col items-center justify-center font-serif text-[#1A1A1A] p-2">
      
      {/* Page Title */}
      <h2 className=" text-4xl  md:text-[48px]  font-cormorant mb-12 uppercase tracking-wide opacity-80">
        Feedback Form
      </h2>

      {/* Card Container */}
      <div className="w-full max-w-[500px] border-[0.5px] border-black rounded-[20px] p-8 md:p-10">
        <form className="space-y-8">
          
          {/* Name Input */}
          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-widest mb-2 ml-1 font-cormorant-infant">Name</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <User size={20} className="text-black" />
              </div>
              <input
                type="text"
                className="w-full bg-transparent border border-black rounded-[12px] pl-12 pr-4 py-3 focus:outline-none shadow-[inset_0px_2px_4px_rgba(0,0,0,0.05)]"
                defaultValue="|"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-widest mb-2 ml-1 font-cormorant-infant">Email Address</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Mail size={18} className="text-black" />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-black rounded-[12px] pl-12 pr-4 py-3 focus:outline-none italic text-sm placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Star Rating Section */}
          <div className="flex flex-col">
            <label className="text-sm italic mb-4 font-cormorant-infant">Share your experience in scaling</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    size={32}
                    fill={star <= rating ? "#FFD700" : "none"}
                    stroke={star <= rating ? "#DAA520" : "#BCBCBC"}
                    strokeWidth={1.5}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Comments Area */}
          <div className="flex flex-col">
            <textarea
              rows={6}
              placeholder="Add your comments..."
              className="w-full bg-transparent border border-black rounded-[15px] p-5 focus:outline-none resize-none italic text-sm placeholder:text-gray-400"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-6 pt-4">
            <button 
              type="button"
              className="flex-1 py-4 border border-black rounded-full uppercase tracking-widest text-sm hover:bg-black/5 transition-colors font-cormorant-infant"
            >
              Cancel
            </button>
            <Button 
              type="submit"
              className="flex-1 py-8 bg-[#1E1E22] text-white rounded-full uppercase tracking-[0.2em] text-sm shadow-xl hover:bg-black font-cormorant-infant"
            >
              Submit
            </Button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;