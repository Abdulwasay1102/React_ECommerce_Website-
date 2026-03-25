import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb"
import { Link } from "react-router-dom"
import { Button } from "@/Components/ui/button"
import { TagIcon,ArrowRight,Trash2 } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/Store";
import { decreaseQantity, deleteitem, increaseQuantity } from "@/Slices/CartSlice";
import { toast } from "sonner";

const Cart = () => {
  
  
  const cart = useSelector((state:RootState)=>state.cart)
  const dispatch = useDispatch() ;
  const subtotal = cart.reduce((total,item)=>total +(item.price*item.qantity),0)
  const discount = subtotal * 0.1;
  const delivery = 0
  const total = subtotal-discount + delivery
 
  return (
   < >
   <div className="">    {/* ********* Breadcrumb links Start Here**************** */}
      <div className='ml-10 mt-5'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to='/'>Home</Link>
              </BreadcrumbLink>
              
            <BreadcrumbSeparator />
              <BreadcrumbLink asChild>
              <Link to="/category">Product</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Cart</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

          </BreadcrumbList>
        </Breadcrumb>
      </div>
    {/* ********* Breadcrumb links End Here**************** */}
    <div>
        <h1 className="font-cormorant font-medium text-2xl mt-3 mx-5">Your Cart</h1>
    </div>
 {/* ********* Main grid layout start Here**************** */}
   <div>
    <div className="grid p-2 gap-2 grid-cols-1 md:grid-cols-2  ">
       {/* ********* Items ui start here **************** */}
        <div className="items ">
      {cart.length >0 ?
         <div className="bg-[#D9C8BB] border border-gray-400 rounded-2xl p-5">
        
            {cart.map((item)=>(
          <div key={item.id}>        
  
  {/* Single Cart Item */}
  <div className="flex justify-between items-start">
    
    {/* Left Side */}
    <div className="flex gap-4">
      
      {/* Image Box */}
      <div className="bg-gray-200 rounded-xl w-20 h-20 flex items-center justify-center">
        <img src={item.img} alt="" className="w-20 h-20 object-cover rounded-2xl" />
      </div>

      {/* Product Info */}
      <div>
        <h2 className="font-cormorant text-lg">{item.des}</h2>
        <p className="text-sm text-gray-600 font-cormorant-infant">{item.size}</p>
        <p className="text-sm text-gray-600 font-cormorant-infant">{item.color}</p>

        <p className="mt-3 font-cormorant text-lg">{item.price}$</p>
      </div>
    </div>

    {/* Right Side */}
    <div className="flex flex-col justify-between items-end h-24">
      
      {/* Delete Icon */}
      <button onClick={()=>{
      dispatch(deleteitem(item))
         toast.success("Product is removed from cart ");
      }}>
        <Trash2 className="w-5 h-5 text-red-500 cursor-pointer"  />
      </button>

      {/* Quantity Control */}
      <div className="flex items-center gap-4 bg-gray-300 rounded-full px-4 py-1">
        <button className="text-lg cursor-pointer" onClick={()=>dispatch(decreaseQantity(item))}>−</button>
        <span>{item.qantity}</span>
        <button className="text-lg cursor-pointer " onClick={()=>dispatch(increaseQuantity(item))}>+</button>
      </div>

    </div>
  </div>

  {/* Divider */}
  <hr className="border-gray-400 my-5" />

</div>

))}
  
</div>
 : <h1 className=" font-cormorant text-[#c98e60] mb-10 mt-4 md:mt-30 md:-ml-20 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Your cart is empty
      </h1>  }

        </div>

        <div className="summary outline-1 outline-gray-600 p-2 rounded-2xl bg-[#D9C8BB] h-80">
            <h3 className="font-cormorant text-2xl">Order Summary</h3>
            <div className="flex justify-between mb-2">
                <span className="font-cormorant-infant text-gray-600">Subtotal</span> 
                <span className="font-cormorant-infant">${subtotal}</span>
           
            </div>
              <div className="flex justify-between mb-2">
                <span className="font-cormorant-infant text-gray-600">Discount</span> 
                <span className="text-red-500">-${discount}</span>
           
            </div>
              <div className="flex justify-between mb-2">
                <span className="font-cormorant-infant text-gray-600">Delevary Fee</span> 
                <span className="font-cormorant-infant">${delivery}</span>
           
            </div>
            <hr className="h-0.5 bg-gray-200" />
              <div className="flex justify-between mb-2 mt-3">
                <span className="font-cormorant-infant text-gray-600">Total</span> 
                <span className="font-cormorant-infant">${total}</span>
           
            </div>
              <div className="flex justify-between mb-2 mt-3">
                
                <div className="relative flex items-center w-full">

  <span className="absolute left-4 text-gray-400">
    <TagIcon className="w-5 h-5" /> 
  </span>

  {/* The Input */}
  <input 
    type="text"
    placeholder="Add promo code"
    className="w-full pl-12 pr-4 py-1 bg-[#F0F0F0] rounded-full focus:outline-none font-cormorant-infant"
  />
</div>
  <span ><Button className="px-8  md:px-16 py-4 rounded-full font-cormorant-infant uppercase text-sm hover:bg-gray-800 transition-colors" onClick={()=>{ toast.success("Promo code Applied Sucessfully") }}>Apply</Button></span>   
            </div>
          <button className="w-full mt-5 bg-black text-white py-3 rounded-full font-cormorant flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
           
    Go to Checkout
     <ArrowRight/>
  </button>

        </div>

    </div>
   </div>




</div>

   </>
  )
}

export default Cart