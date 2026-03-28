import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import AboutUs from "@/pages/About"
import Cart from "@/pages/Cart"
import Category from "@/pages/Category"
import ContactUs from "@/pages/Contact"
import FeedbackForm from "@/pages/Feedback"
import Home from "@/pages/Home"
import { ProductDetail } from "@/pages/ProductDetail"
import { createBrowserRouter,  RouterProvider,Outlet } from "react-router-dom"
import { Toaster } from "@/Components/ui/sonner"
import PaymentPage from "@/pages/PaymentPage"
import OrderComplete from "@/pages/Ordercomplete"


const Rootlayout = ()=>{

 return(
<div className="bg-[#e6ded9] min-h-screen">
  <Navbar />
  <Outlet />
  <Footer />
  <Toaster position="top-center" closeButton />
</div>
 )

}

const Layout = () => {
 

    const router = createBrowserRouter([
        {
            path:'/',
            element:<Rootlayout/>,
            children: [
             {
              index: true,
              element : <Home/>,

             },
             {
             path:"product/:id",
             element: <ProductDetail />
              
             },
             {
              path:"category",
              element:<Category/>
             },
             {
              path:"cart",
              element:<Cart/>
             },
             {
              path:"aboutus",
              element: <AboutUs/>
             },
              {
              path:"contactus",
              element:<ContactUs/>
              
             },
             {
              path:"feedback",
              element:<FeedbackForm/>
             },
             {
              path:"paymentpage",
              element:<PaymentPage/>
             },
             {
              path:"ordercomplete",
              element:<OrderComplete/>
             }
             
            ]
        }
    ])
  return (
<>
<RouterProvider router={router}/>
</>
  )
  
}

export default Layout 