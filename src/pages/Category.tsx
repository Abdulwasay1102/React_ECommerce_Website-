import { useEffect } from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb"
import { Link } from "react-router-dom"
import { Card,CardContent } from "@/Components/ui/card"
import { AspectRatio } from "@/Components/ui/aspect-ratio"
import { images } from "@/Data/products"
import Newsattler from "@/Components/Newsattler"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/ui/pagination"
import { useState } from "react"



const Category = () => {

const [currentPage, setCurrentPage] = useState(1)

const itemsPerPage = 12

const totalPages = Math.ceil(images.length / itemsPerPage)

// slice data for current page
const startIndex = (currentPage - 1) * itemsPerPage
const currentItems = images.slice(startIndex, startIndex + itemsPerPage)



  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}, [currentPage])
 
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
              <BreadcrumbPage>Casual</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

          </BreadcrumbList>
        </Breadcrumb>
      </div>
    {/* ********* Breadcrumb links End Here**************** */}
    {/* md:grid-cols-[260px_1fr] */}
    <div className="mian mt-3 p-2 gap-3 grid grid-cols-1   ">
      {/* <div className="filter  "></div> */}
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-5">
  {currentItems.map((item, index) => (
    <Link to={`/product/${item.id}`} className="block" >
    
    <Card
      key={index}
      className="group overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
    >
      <CardContent className="p-0">
        <AspectRatio ratio={1/ 1}>
          <img
            src={item.img}
            alt=""
            className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
          />
           <div className="absolute bottom-0 w-full
                              text-white text-center py-2
                        bg-gradient-to-t from-black/70 to-transparent
                        opacity-0 group-hover:opacity-100
                        transition duration-500">

                        {item.des}

                          </div>
        </AspectRatio>
      </CardContent>
    </Card>
    </Link>
  ))}
</div>
</div>
  <div className="pagination mt-10 flex justify-center items-center">
  <Pagination>
    <PaginationContent>

      {/* Previous */}
      <PaginationItem>
        <PaginationPrevious
          href="#"
          onClick={(e) => {
            e.preventDefault()
            if (currentPage > 1) setCurrentPage(currentPage - 1)
          }}
        />
      </PaginationItem>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <PaginationItem key={page}>
          <PaginationLink
            href=""
            isActive={currentPage === page}
            onClick={(e) => {
              e.preventDefault()
              setCurrentPage(page)
            }}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}

      {/* Next */}
      <PaginationItem>
        <PaginationNext
          href="#"
          onClick={(e) => {
            e.preventDefault()
            if (currentPage < totalPages) setCurrentPage(currentPage + 1)
          }}
        />
      </PaginationItem>

    </PaginationContent>
  </Pagination>
</div>

   <div className="mt-32">
    <Newsattler/>
   </div>
   
   </>
  )
}

export default Category