import logo from '../assets/images/logo.png'
import { ShoppingCart } from 'lucide-react'
import { Search } from 'lucide-react'
import { UserCircle} from 'lucide-react'
import { Menu } from "lucide-react"; 
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/Components/ui/sheet";
import { NavLink,Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/Store';

const Navbar = () => {
  const [isopen, setIsopen] =useState(false);
  const closesheet = ()=>{
    setIsopen(false);
  }
  const totalItems = useSelector((state:RootState)=>state.cart);
  return (
   <>
   

 <header className="w-full bg-black  ">
  <div className="mx-auto h-10 md:h-24 max-w-7xl px-6 flex flex-col items-center justify-between py-2   ">

   
    <div className="shrink-0">
      <img
        src={logo}
        alt="Majora"
        className="h-14 object-contain"
      />
    </div>

    <div className="relative w-full flex items-center justify-center">
      
      <nav className="hidden md:flex gap-4 lg:gap-8 text-xs tracking-widest text-white">
        <NavLink to={'/category'} className="hover:text-gray-300 transition cursor-pointer font-manrope text-[14px]">COLLECTION</NavLink>
        <NavLink to={'/'} className="hover:text-gray-300 transition cursor-pointer font-manrope text-[14px]">HOME</NavLink>
        <NavLink to={'/aboutus'} className="hover:text-gray-300 transition cursor-pointer font-manrope text-[14px]">ABOUT</NavLink>
         <NavLink to={'/contactus'} className="hover:text-gray-300 transition cursor-pointer font-manrope text-[14px]">CONTACT </NavLink>
        {/* <a className="hover:text-gray-300 transition cursor-pointer font-manrope text-[14px]">STORES</a> */}
        <NavLink to={'/feedback'} className="hover:text-gray-300 transition cursor-pointer font-manrope text-[14px]">FEEDBACK </NavLink>
      </nav>

      <div className="flex absolute  right-0 md:flex items-center gap-1.5 text-white">
        <button className='flex items-center justify-center w-8 h-8 md:w-10 md:h-10'><Search/></button>
       <Link to={"/cart"} className='relative'> <button className='flex items-center justify-center w-8 h-8 md:w-10 md:h-10 cursor-pointer'><ShoppingCart /></button> 
       {totalItems.length > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white ring-2 ring-black">
            {totalItems.length}
          </span>
        )}
       </Link>
        <button className='flex items-center justify-center'><UserCircle/></button>
      </div>
      
      
    </div>
  </div>
  <div className="md:hidden">
  <Sheet open={isopen} onOpenChange={setIsopen}>
    <SheetTrigger asChild>
      <button className="text-white p-2">
        <Menu size={28} />
      </button>
    </SheetTrigger>

    <SheetContent side="left"  className="bg-black text-white border-gray-800">
      <SheetTitle className="text-white">Menu</SheetTitle>
      
      <nav className="flex flex-col gap-6 mt-10">
        <NavLink to={"/category"} onClick={closesheet} className="text-lg font-manrope tracking-widest" >COLLECTION</NavLink>
        <NavLink to={"/"} onClick={closesheet} className="text-lg font-manrope tracking-widest" >HOME</NavLink>
        <NavLink to={"/aboutus"} onClick={closesheet} className="text-lg font-manrope tracking-widest" >ABOUT</NavLink>
          <NavLink to={"/contactus"} onClick={closesheet} className="text-lg font-manrope tracking-widest" >CONTACT</NavLink>
        {/* <a className="text-lg font-manrope tracking-widest">STORES</a> */}
        <NavLink to={"/feedback"} onClick={closesheet} className="text-lg font-manrope tracking-widest" >FEEDBACK</NavLink>
      </nav>
    </SheetContent>
  </Sheet>
</div>
</header>


   </>
  )
}

export default Navbar