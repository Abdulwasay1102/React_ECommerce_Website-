import Navbar from "@/Components/Navbar"
import Home from "@/pages/Home"
import { createBrowserRouter,  RouterProvider } from "react-router-dom"

const Layout = () => {
 

    const router = createBrowserRouter([
        {
            path:'/',
            element:<Home/>,
            children: [
              {
                path:"/navbar",
                element:<Navbar/>
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