import { Button } from "./ui/button"
const Newsattler = () => {
  return (
    <>
      
<div className="mt-5  flex justify-center px-4"> 
  <div className="w-full max-w-[1240px] rounded-2xl bg-black py-8 md:py-12"> 
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 md:gap-5 px-6 sm:px-10 items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-[#FFC633] text-2xl md:text-3xl font-semibold font-cormorant leading-tight">
          STAY UP TO DATE ABOUT <br className="hidden md:block" /> OUR LATEST OFFERS
        </h1>
      </div>
      <div className="flex flex-col items-center lg:items-end gap-3 w-full">
        <div className="w-full max-w-md space-y-3">
          <input
            type="text"
            placeholder="ENTER YOUR EMAIL ADDRESS"
            className="w-full px-4 py-3 border text-white border-gray-300 placeholder:tracking-tighter placeholder:md:tracking-normal rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-center placeholder:text-gray-500"
          />
          <Button className="bg-[#FFC633] text-black w-full rounded-full font-cormorant text-lg uppercase hover:bg-yellow-500 transition py-6">
            SUBSCRIBE TO NEWSLETTER
          </Button>
        </div>
      </div>

    </div>
  </div>
</div>

    </>
  )
}

export default Newsattler