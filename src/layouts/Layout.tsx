import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import Category from "@/pages/Category"
import Home from "@/pages/Home"
import { ProductDetail } from "@/pages/ProductDetail"
import { createBrowserRouter,  RouterProvider,Outlet } from "react-router-dom"


const Rootlayout = ()=>{

 return(
  <div>
    <Navbar/>

    <Outlet/>

    <Footer/>
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