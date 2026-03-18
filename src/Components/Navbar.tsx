import logo from '../assets/images/logo.png'
import { ShoppingCart } from 'lucide-react'
import { Search } from 'lucide-react'
import { UserCircle} from 'lucide-react'
import { Menu } from "lucide-react"; 
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/Components/ui/sheet";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isopen, setIsopen] =useState(false);
  const closesheet = ()=>{
    setIsopen(false);
  }
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
        <a className="hover:text-gray-300 transition cursor-pointer font-manrope text-[14px]">ABOUT</a>
        <a className="hover:text-gray-300 transition cursor-pointer font-manrope text-[14px]">CONTACT</a>
        <a className="hover:text-gray-300 transition cursor-pointer font-manrope text-[14px]">STORES</a>
        <a className="hover:text-gray-300 transition cursor-pointer font-manrope text-[14px]">FEEDBACK</a>
      </nav>

      <div className="flex absolute  right-0 md:flex items-center gap-1.5 text-white">
        <button className='flex items-center justify-center w-8 h-8 md:w-10 md:h-10'><Search/></button>
        <button className='flex items-center justify-center w-8 h-8 md:w-10 md:h-10'><ShoppingCart/></button>
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
        <a className="text-lg font-manrope tracking-widest">ABOUT</a>
        <a className="text-lg font-manrope tracking-widest">CONTACT</a>
        <a className="text-lg font-manrope tracking-widest">STORES</a>
        <a className="text-lg font-manrope tracking-widest">FEEDBACK</a>
      </nav>
    </SheetContent>
  </Sheet>
</div>
</header>


   </>
  )
}

export default Navbar