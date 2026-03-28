import { FaCheck } from "react-icons/fa";
import { useState } from "react";
 import visa from "@/assets/images/Visa_form.png"
import { useSelector } from "react-redux";
import type { RootState } from "@/Store";
import {TagIcon} from "lucide-react"


const PaymentPage = () => {
     const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const isNameValid = name.trim().length > 0;

   const cart = useSelector((state:RootState)=>state.cart)
  const subtotal = cart.reduce((total,item)=>total +(item.price*item.qantity),0)
  const discount = subtotal * 0.1;
  const delivery = 0
  const total = subtotal-discount + delivery

  return (
   <>
     <div>
        <h1 className="font-cormorant font-bold text-2xl mb-4 mt-3 mx-5">Payment Form</h1>
    </div>
   <div>
    <div className="main grid grid-cols-1 md:grid-cols-2  p-2 gap-5 ">
        <div className="form ">
             <div className="max-w-sm mx-auto p-6 bg-[#f8ebe0] rounded-lg border border-[#e2d7d0]">
      {/* Name on Card */}
      <div className="mb-4 relative">
        <label className="block text-xs font-semibold mb-1">Name on Card</label>
        <input
          type="text"
          placeholder="John Smith"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {isNameValid && (
          <FaCheck className="absolute right-3 top-9 text-green-500" />
        )}
      </div>

      {/* Card Number */}
      <div className="mb-4 relative">
        <label className="block text-xs font-semibold mb-1">Card Number</label>
        <input
          type="text"
          placeholder="4242 XXXX XXXX XXXX"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <img
          src={visa}
          alt="Visa"
          className="absolute right-3 top-2.5 w-12 h-7 object-contain"
        />
      </div>

      {/* Expiry & CVV */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-xs font-semibold mb-1">Expiry Date</label>
          <input
            type="text"
            placeholder="12/34"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-semibold mb-1">CVV</label>
          <input
            type="text"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Pay Button */}
      
      <button
        className="w-full bg-black text-white py-3 rounded text-sm font-medium hover:opacity-90 transition rounded-2xl"
      >
        Pay Now
      </button>
      
    </div>

        </div>
        <div className="order  "> 
            <div className="item mb-4">
                 <div className="items ">
      {cart.length >0 ?
         <div className="bg-[#D9C8BB] border border-gray-400 rounded-2xl p-5">
        
            {cart.map((item)=>(
          <div key={item.id}>        
  
  {/* Single Cart Item */}
  <div className="flex justify-between items-start ">
    
    {/* Left Side */}
    <div className="flex gap-4 ">
      
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

            </div>
            <div className="summary ">
                
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

  
</div>
</div>
</div>

                
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default PaymentPage