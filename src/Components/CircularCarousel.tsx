
import { CircularTestimonials } from '@/Components/ui/circular-testimonials';
import mypic from '@/assets/images/My_pic.png'
const CircularCarousel = () => {
    const testimonials = [
  {
    quote: 
  "As a Laravel Developer, I specialize in crafting elegant and high-performance backend systems using the PHP ecosystem. I leverage the power of Eloquent ORM, Blade templating! ",
    name: "Tamar Mendelson",
    designation: "Laravel Developer",
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
     quote: 
      "I make Clean, Modern and Responsive Design. Convert any figma in to a Pixel Perfect clean Responsive Design! Make User Frindly Andriod App in Andriod! ",
    name: "Abdul Wasay",
    designation: "React Js Developer",
    src:mypic

},
  {
    quote:
      "Shining Yam is a hidden gem! The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
    name: "Martina Edelweist",
    designation: "Mern Stack Developer",
    src:
      "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
];

  return (
    <>
    <div className="">
  <h1 className="text-center mt-3 mb-2 font-cormorant text-4xl uppercase ">
    OUR TEAM
  </h1>
  
</div>
  <section>
   
    <div className="bg-white p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1456px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#454545",
            testimony: "#171717",
            arrowBackground: "#141414",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#00A6FB",
          }}
          fontSizes={{
            name: "28px" ,
            designation: "20px",
            quote: "20px",
          }}
        
         

          
        />
      </div>
    </div>

    
  </section>
</>
  )
}

export default CircularCarousel