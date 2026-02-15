import * as React from "react"
import Navbar from "@/Components/Navbar"
import { AspectRatio } from "@/Components/ui/aspect-ratio"
import Womenimg from "@/assets/images/women_img.jpg";
import star from "@/assets/images/Star.png"
import AutoScroll from "embla-carousel-auto-scroll"
import watch from "@/assets/images/Watch.jpg"
import Mencolth from "@/assets/images/Mencloth.jpg"
import frok from "@/assets/images/frok.jpg"
import gift from "@/assets/images/gifts.jpg"
import perfume from "@/assets/images/Luxery_perfume.jpg"
import { Button } from "@/Components/ui/button";
import customer1 from "@/assets/images/customer1.jpg"
import customer2 from "@/assets/images/customer2.jpg"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
   
} from "@/Components/ui/carousel"
import { Card,CardContent } from "@/Components/ui/card";
import { Star} from "lucide-react";





const Home = () => {
const images =[
  {
  id: 1,
  img: watch,
  des: "loem",
 },
   {
  id: 2,
  img: gift,
   des: "loem",
 },  {
  id: 3,
  img: Mencolth,
   des: "loem",
 },  {
  id: 4,
  img: frok,
   des: "loem",
 },   {
  id: 5,
  img: gift,
   des: "loem",
 },  {
  id: 6,
  img: Mencolth,
   des: "loem",
 },  {
  id: 7,
  img: watch,
   des: "loem",
 },
]

  const plugin = React.useRef(
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: false,  playOnInit: true,    })
  )
  return (
    <>
    <Navbar/>
    {/* ******************** MAIN LAYOUT START FROM HERE ******************* */}
    <main className="h-auto ">
      <div className="main relative overflow-hidden">
        {/* ********* THE LINE START FROM HERE **************** */}
      <svg
  viewBox="0 0 1415 991"
  className="
    absolute
    lg:-bottom-28
    lg:left-0
    w-full
    h-auto
    pointer-events-none
    opacity-80
  "
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0.700627 -20C0.599025 102.183 11.9315 174.824 48.3409 285.37C152.984 603.088 365.624 671.375 613.804 694.636C800.149 712.101 921.333 657.355 1115.09 694.636C1217.25 714.292 1287.71 755.429 1353.78 872.242C1385.54 928.402 1413.7 1033 1413.7 1033"
    stroke="white"
    strokeWidth="1.4"
  />
</svg>
 {/* ********* THE LINE END HERE  **************** */}
    
 {/* ********* THE GRID AND IMAGE START FROM HERE **************** */}
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 md:gap-0  "
      style={{
        
        backgroundImage: `
          radial-gradient(90% 70% at 92% 8%, rgba(142,42,24,0.95) 0%, rgba(90,34,28,0.55) 10%, rgba(0,0,0,0) 40%),
          radial-gradient(60% 40% at 18% 22%, rgba(180,80,60,0.20) 0%, rgba(0,0,0,0) 45%),
          radial-gradient(120% 100% at 82% 18%, rgba(74,31,24,0.45) 0%, rgba(0,0,0,0.6) 70%),
          linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,1))
        `,
        backgroundRepeat: "no-repeat",
       
        backgroundBlendMode: "screen, screen, normal, normal",
      }}
      >

       <div className="w-full max-w-[300px] md:max-w-[380px]  md:mt-10  mx-0 md:mx-0 order-2 md:order-1 sm:order-2"> 
      
     
      <div className="overflow-hidden rounded-tr-[200px] md:rounded-tr-[280px] border-b-0">
        {/* <AspectRatio ratio={1.8/3}> */}
        <AspectRatio ratio={1.8/3}>
          <img 
            src={Womenimg} 
            alt="Elegant Fashion" 
            className="h-full w-full object-cover object-top scale-x-[-1]" 
          />
        </AspectRatio>
      </div>

    </div>
     {/* ********* THE IMAGE END HERE **************** */}
      {/* ********* THE TEXT START HERE **************** */}
        <div className="h-auto flex items-center ml-0  justify-start md:mb-20 mt-10
  
  sm:-ml-auto
  md:-ml-auto
  lg:-ml-24
  xl:-ml-48
  order-1
  sm:order-1
  md:order-2"
  >
    <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-auto">
          {/* <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#ffff]"> </h1> */}
           <h1 className="scroll-m-20 text-[#ffff] lg:mt-3 text-center md:text-left font-cinzel text-6xl sm:text-8xl md:text-7xl lg:text-9xl xl:text-9xl md:mx-0 mx-auto ">
      Elegen<span className="relative lg:inline-block ">t
    <img 
      src={star}
      alt="star decoration"
      className="md:hidden lg:block absolute  -top-4 -right-5  md:-right-9 w-6 sm:w-12 sm:-right-10 md:w-11  lg:w-12 lg:-right-8 lg:-top-10   max-w-none pointer-events-none
      
      "
    />
  </span> <br /> &  <br /> Luxery
    </h1>

     <button className="px-8 py-3 absolute top-[600px]  rounded-bl-2xl sm:static md:static lg:static  lg:mt-16   bg-white text-black font-manrope tracking-widest hover:bg-[#b4aaaa] transition-colors duration-300 rounded-sm uppercase text-sm md:text-base">
      Explore Collection
    </button>
        
        </div>
      
        
      </div>
     </div>
     </div>
      {/* ********* THE TEXT END HERE**************** */}
       {/* ********* TEXT CAROUSEL START FROM HERE **************** */}
     <div className="carosel overflow-hidden border-t-2 border-t-[#131614] border-b-[#131614] border-b-2  ">

      <Carousel  
      opts={{
      loop:true
      }}
     plugins={[plugin.current]}
      className="w-full bg-black py-11 " >
     <CarouselContent className="-ml-10 items-center">
    {["GUCCI", "LOUIS VUITTON", "CHANEL", "PRADA", "FENDI", "ZARA.","GUCCI.", "LOUIS VUITTON.", "CHANEL.", "PRADA.", "FENDI.", "ZARA"].map((brand)=>(
    <CarouselItem key={brand} className="pl-10 basis-auto">
      <span className="text-2xl text-center font-bold tracking-widest text-white uppercase">
              {brand}
            </span>
          
       
 </CarouselItem>
  ))}
    
    
  </CarouselContent>
</Carousel>
 



     </div>
      {/* ********* TEXT CAROUSEL END HERER **************** */}

      {/* ********* IMAGE CAROUSEL START FROM HERE **************** */}
     <div >
      <h1 className="font-cormorant text-5xl text-center text-black mb-5">Collection</h1>
     </div>
     <div className="imgcarousel flex justify-center items-center">
     
      <Carousel className="w-full  lg:max-w-350 px-4 overflow-visible">
      <CarouselContent className="pl-1 md:pl-0 lg:pl-10">
        {images.map((index)=>(
          <CarouselItem key={index.id} className=" md:basis-1/3 basis-1/2 pl-1 lg:basis-1/6 ">
            <div className="p-1">
              <Card className="gap-10 overflow-hidden rounded-3xl  ">
                <CardContent className="p-0   ">
                   <AspectRatio ratio={1/1}>
                   <img className="w-full h-full rounded-2xl object-cover " src={index.img} alt="" />
                   {index.des}
                   </AspectRatio>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className="-mt-32 ml- hidden md:block" />
      <CarouselNext className="-mt-32 hidden md:block"/> */}
    </Carousel>
     </div>
      {/* ********* IMAGE CAROUSEL END HERE **************** */}

      {/* ********* Big perfume image start here **************** */}
      
 
       <div className="perfumeimg mt-10 relative bg-[#E4D7C7] h-55 sm:h-[400px] md:h-auto overflow-hidden  ">
        <AspectRatio ratio={1512 / 638}>
       <img className="w-full h-full  md:object-cover object-cover sm:object-cover md:block relative top-8 "
       style={{
            // This fades the left and top edges so the "box" disappears
            maskImage: 'linear-gradient(to left, black 70%, transparent 100%), linear-gradient(to top, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 70%, transparent 100%), linear-gradient(to top, black 80%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in'
          }}
       src={perfume} alt="" /> 
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4
                md:flex md:flex-col md:justify-center md:items-start
                sm:pl-14 lg:p-14 gap-">

  <h1 className="text-3xl lg:text-8xl md:text-7xl md:-ml-10 md:mt-10 sm:text-6xl sm:relative sm:bottom-15 font-cinzel">
    Luxury <br className="hidden md:block" /> Perfumes
  </h1>
<div>
  <p className="mt-2 text-[10px] tracking-tighter md:-ml-5 sm:text-sm lg:text-xl font-cinzel md:tracking-tighter sm:relative sm:bottom-15">
    feel The luxury with our perfume collection
  </p>
  </div>
<div className=" relative lg:top-20 top-20 sm:top-40 md:top-10 md:block">
  <Button className="font-cormorant rounded-3xl py-2 px-6 md:px-8 text-[gold]
                     mt-6  lg:bottom-20 md:relative md:bottom-10 md:ml-14 lg:ml-28">
    Shop Now
  </Button>
</div>
</div>

        </AspectRatio>
       </div>
        {/* ********* Big perfume image End here **************** */}
           {/* ********* Triangle Image Carosule start haver **************** */}
      <div>
        
        <h1 className="font-cormorant text-4xl mt-1 mb-3 flex items-center justify-center">New Arrival</h1>
      </div>
     <div>
     <div className="imgcarousel flex justify-center items-center">
     
      <Carousel className="w-full  lg:max-w-350 px-4 overflow-visible">
      <CarouselContent className="pl-1 md:pl-0 lg:pl-10">
        {images.map((index)=>(
          <CarouselItem key={index.id} className=" md:basis-1/3 basis-1/2 pl-1 lg:basis-1/6 ">
            <div className="p-1">
              <Card className="gap-10 overflow-hidden ">
                <CardContent className="p-0 ">
                   <AspectRatio ratio={1/1.5}>
                   <img className="w-full h-full rounded-2xl object-cover " src={index.img} alt="" />
                   {index.des}
                   </AspectRatio>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className="-mt-32 ml- hidden md:block" />
      <CarouselNext className="-mt-32 hidden md:block"/> */}
    </Carousel>
     </div>
     </div>
      {/* ********* Triangle Image Carosule End  haver **************** */}

      {/* ********* Customer Reviews section Start here **************** */}
      
      <div className="flex justify-center items-center">
        <h1 className="font-cormorant text-3xl mt-2 ">Customer Reviews </h1>
      </div>

    <div className="customer review flex justify-center w-full  ">

      <div className="main  h-auto grid  grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-16 p-6 max-w-6xl w-full">
        <div className="card1  ">
          <Card className=" overflow-hidden rounded-half shadow-black ">
                <CardContent className=" p-0" >
                <AspectRatio ratio={577/435}>
                   <img className="w-full h-full   " src={customer1} alt="" />
                </AspectRatio>
                </CardContent>
              </Card>

              <div className="star flex justify-center gap-3 mt-5 ">
                <Star fill="#FFD700" color="#FFD700"/>  <Star fill="#FFD700" color="#FFD700"/>  <Star fill="#FFD700" color="#FFD700"/>  <Star/> <Star/>  <Star/> 
              </div>
              <div className="paragraph mt-3">
                <p className="font-cormorant-infant">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero eligendi dolorum reprehenderit corporis exercitationem accusantium, laboriosam facilis. Consequuntur fugit ratione neque possimus nisi provident suscipit quam? Debitis voluptas unde illo.</p>
              </div>

        </div>
        <div className="card2 ">
           <Card className=" overflow-hidden rounded-half shadow-black ">
                <CardContent className=" p-0" >
                <AspectRatio ratio={577/435}>
                   <img className="w-full h-full   " src={customer2} alt="" />
                </AspectRatio>
                </CardContent>
              </Card>
              
              <div className="star flex justify-center gap-3 mt-5 ">
                <Star fill="#FFD700" color="#FFD700"/>  <Star fill="#FFD700" color="#FFD700"/>  <Star/>  <Star/> <Star/>  <Star/>  
              </div>
                 <div className="paragraph mt-3">
                <p className="font-cormorant-infant">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero eligendi dolorum reprehenderit corporis exercitationem accusantium, laboriosam facilis. Consequuntur fugit ratione neque possimus nisi provident suscipit quam? Debitis voluptas unde illo.</p>
              </div>
        </div>
      </div>
    </div>
{/* ********* Customer Reviews section End here **************** */}

{/* *********   BLACK BAR Start Here **************** */}





      
     
    



     
     </main>
  

 

 

</>
  )
}

export default Home