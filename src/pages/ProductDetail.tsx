
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
   
} from "@/Components/ui/carousel"
import { Link, useParams } from 'react-router-dom'
import { Card,CardContent } from "@/Components/ui/card";
import { images } from "@/Data/products";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Star,StarHalf } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { addtocart } from "@/Slices/CartSlice";
import { toast } from "sonner";
import Newsattler from "@/Components/Newsattler";



export const ProductDetail = () => {
const {id} = useParams();
const product = images.find((item)=>item.id === Number(id));

  const [selectedSize, setSelectedSize] = useState("L");
    const [selectedColor, setSelectedColor] = useState("green");

const sizes = ["S", "M", "L", "XL"];
  const colors = [
    { name: "brown", value: "bg-[#4A3F35]" },
    { name: "green", value: "bg-[#355E3B]" },
    { name: "blue", value: "bg-[#2F3E5C]" },
  ];

useEffect(() => {
 window.scrollTo(0,0)
}, []);


const dispatch = useDispatch()

const handleAddToCart = () => {
  if (!product) return;
   window.scrollTo({ top: 0, behavior: "smooth" })
  dispatch(addtocart({
    ...product,
    size: selectedSize,
    color: selectedColor,
      qantity: quantity
  }));
};

const [quantity] = useState(1);

// const increaseQty = () => {
//   setQuantity(prev => prev + 1);
// };

// const decreaseQty = () => {
//   setQuantity(prev => (prev > 1 ? prev - 1 : 1));
// };

  return (
    <>
    {/* ********* Breadcrumb links Start Here**************** */}
      <div className='ml-10 mt-5'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to='/'>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Shop</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

          </BreadcrumbList>
        </Breadcrumb>
      </div>
    {/* ********* Breadcrumb links End Here**************** */}
    {/* ********* Main grid layout start Here**************** */}
   
   <div>
    <div className=' max-w-7xl w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className="images w-full h-auto">
<div className="flex flex-col lg:flex-row gap-4">
  
 
  <div className="flex flex-row lg:flex-col gap-5 p-5  order-2 lg:order-1 shrink-0">
    {[1, 2, 3].map((item) => (
      <div key={item} className="lg:w-30 lg:h-30   bg-white rounded-lg  overflow-hidden cursor-pointer">
        <img src={product?.img} alt="thumb" className="w-full h-full object-cover lg:opacity-60 lg:hover:opacity-100" />
      </div>
    ))}
  </div>

 
  <div className="main_img flex-1  order-1 lg:order-2 ">
     <div className="main_img flex-1 order-1 lg:order-2 p-2">
  <Card className="overflow-hidden rounded-[2.5rem] shadow-lg border-none">
    <CardContent className="p-0 "> 
      <AspectRatio ratio={3.1/ 3}>
        <img 
          src={product?.img} 
          alt="Product" 
          className="w-full h-full object-cover object-center" 
        />
      </AspectRatio>
    </CardContent>
  </Card>
</div>
  </div>
  
</div>
      </div>
      <div className="text md:p-2 p-3">
        <div>
          <h1 className="mt-5 text-5xl font-cormorant">{product?.des}</h1>
        </div>
          <div className="star flex gap-1 mt-3  ">
                <Star size={20} fill="#FFD700" color="#FFD700"/>  <Star size={20} fill="#FFD700" color="#FFD700"/>  <Star size={20} fill="#FFD700" color="#FFD700"/>   <StarHalf size={20} fill="#FFD700" color="#FFD700"/> 
                <span>4.5/5</span>
              </div>
               <div className="flex items-center gap-3 mt-3">
        <span className="text-xl font-semibold font-cormorant-infant">{product?.price}$</span>
        <span className="line-through text-gray-500">{product?.price}$</span>
        <span className="text-xs bg-pink-200 text-red-500 px-2 py-1 rounded-full">
          -10%
        </span>
      </div>
       <p className="text-sm text-gray-600 mt-3 leading-relaxed font-cormorant">
       {product?.description}
      </p>
      <hr />
        <div className="mt-6 ">
        <h3 className="text-sm font-medium font-cormorant text-gray-700 mb-3">
          Select Colors
        </h3>
        </div>
          <div className="flex gap-3">
          {colors.map((color) => (
            <div
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center cursor-pointer ${
                color.value
              } ${
                selectedColor === color.name
                  ? "ring-2 ring-black"
                  : "opacity-70"
              }`}
            >
              {selectedColor === color.name && (
                <span className="text-white text-xs">✓</span>
              )}
            </div>
          ))}
        </div>
      <hr className="mt-3" />

      <div>
         <h3 className=" font-cormorant tracking-wide text-gray-700 mb-3">
          Choose Size
        </h3>

        <div className="flex gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-2 md:px-4 py-2 rounded-full text-sm cursor-pointer ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {size === "S"
                ? "Small"
                : size === "M"
                ? "Medium"
                : size === "L"
                ? "Large"
                : "X-Large"}
            </button>
          ))}
        </div>

      </div>
      <hr className="mt-5" />
      <div className="mt-5 flex items-center gap-4">
  
 
  {/* <ButtonGroup
    orientation="horizontal"
    className="flex items-center bg-gray-300 rounded-full px-6 py-2 gap-6"
  >
    <Button
    onClick={decreaseQty}
      variant="ghost"
      size="icon"
      className="bg-transparent hover:bg-transparent shadow-none cursor-pointer"
    >
      <MinusIcon />
    </Button>

    <span className="text-sm font-medium">{quantity}</span>

    <Button
    onClick={increaseQty}
      variant="ghost"
      size="icon"
      className="bg-transparent hover:bg-transparent shadow-none cursor-pointer"
    >
      <PlusIcon />
    </Button>
  </ButtonGroup> */}

  {/* Add to Cart */}
  
  <button className="flex-1 bg-black text-white py-3 rounded-full text-sm tracking-wide cursor-pointer" onClick={() => {
    handleAddToCart();
    toast.success("Product is added to cart ");
  }}>
  
      
    Add to Cart
  </button>
 


</div>  
      
      </div> 

  
      
        
   </div>
   </div>
 <div >
      <h1 className="font-cormorant text-4xl text-center text-black mb-5 mt-20">You might also like</h1>
     </div>
     <div className="imgcarousel flex justify-center items-center">
     
      <Carousel className="w-full  lg:max-w-350 px-4 overflow-visible">
      <CarouselContent className="pl-1 md:pl-0 lg:pl-10">
        {images.slice(4,15).map((product)=>(
          <CarouselItem key={product.id} className=" md:basis-1/3 basis-1/2 pl-1 lg:basis-1/6 ">
            <div className="p-1 group relative z-10">
              <Link to={`/product/${product.id}`} className="block" >
              <Card className="gap-10 overflow-hidden rounded-3xl  transition-all duration-500
             hover:-translate-y-2 hover:shadow-2xl cursor-pointer ">
                <CardContent className="p-0   ">
                   <AspectRatio ratio={1/1}>
                   <img className="w-full h-full rounded-2xl object-cover transition-transform duration-600
                   group-hover:scale-120 " src={product.img} alt="" />
                    <div className="absolute bottom-0 w-full
                              text-white text-center py-2
                        bg-gradient-to-t from-black/70 to-transparent
                        opacity-0 group-hover:opacity-100
                        transition duration-500">

                        {product.des}

                          </div>
                   </AspectRatio>
                </CardContent>
              </Card>
              </Link>
            </div> 
          </CarouselItem>
        ))}
      </CarouselContent>
   <CarouselPrevious className="left-2 md:left-4 top-1/2 -translate-y-1/2 absolute" />
        <CarouselNext className="right-2 md:right-4 top-1/2 -translate-y-1/2 absolute" />
    </Carousel>
     </div>

     <div className="mt-20">
      <Newsattler/>
     </div>


    </>
  )
}