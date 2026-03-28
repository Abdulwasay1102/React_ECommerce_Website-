
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb"
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

    </>
  )
}