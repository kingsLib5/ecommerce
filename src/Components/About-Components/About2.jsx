import React from 'react'

function About2() {
  return (
   <>
   <div className="min-h-[40vh]  grid grid-cols-12 mx-[70px]  my-[70px] gap-[15px]">
       <div className=" col-span-3 border border-[gray] grid grid-rows-2 gap-[15px] rounded-lg ">
         <div className=" flex flex-row  ">
          <div className="w-[30%] flex "></div>
          <div className="bg-[url(./assets/top.png)] bg-cover bg-center flex w-[40%] mt-[10px]"></div>
          <div className=" flex w-[30%]"></div>
          
         </div>
         <div className="grid justify-center ">
            <div className="space-y-3 text-center">
               <h2 className='font-bold text-4xl'>  10.5k</h2>
               <p className='text-[23px]'>Sellers active our site</p>
            </div>
         </div>
       </div>
       <div className=" col-span-3 bg-[#DB4444] text-white border border-[gray] grid grid-rows-2 gap-[15px] rounded-lg  ">
         <div className=" flex flex-row  ">
          <div className="w-[30%] flex "></div>
          <div className="bg-[url(./assets/top2.png)] bg-cover bg-center flex w-[40%] mt-[10px]"></div>
          <div className=" flex w-[30%]"></div>
          
         </div>
         <div className="grid justify-center ">
            <div className="space-y-3 text-center">
               <h2 className='font-bold text-4xl'> 33k</h2>
               <p className='text-[21px]'>Monthly Product Sales</p>
            </div>
         </div>
       </div>
       <div className=" col-span-3 border border-[gray] grid grid-rows-2 gap-[15px] rounded-lg  ">
         <div className=" flex flex-row  ">
          <div className="w-[30%] flex "></div>
          <div className="bg-[url(./assets/top.png)] bg-cover bg-center flex w-[40%] mt-[10px]"></div>
          <div className=" flex w-[30%]"></div>
          
         </div>
         <div className="grid justify-center ">
            <div className="space-y-3 text-center">
               <h2 className='font-bold text-4xl'>  45.5k</h2>
               <p className='text-[21px]'>Customer's active in our site</p>
            </div>
         </div>
       </div>
       <div className=" col-span-3 border border-[gray] grid grid-rows-2 gap-[15px] rounded-lg  ">
         <div className=" flex flex-row  ">
          <div className="w-[30%] flex "></div>
          <div className="bg-[url(./assets/top.png)] bg-cover bg-center flex w-[40%] mt-[10px]"></div>
          <div className=" flex w-[30%]"></div>
          
         </div>
         <div className="grid justify-center ">
            <div className="space-y-3 text-center">
               <h2 className='font-bold text-4xl'>  25k</h2>
               <p className='text-[21px]'>Annual gross sale in our site</p>
            </div>
         </div>
       </div>
   </div>
       

     
   </>
  )
}

export default About2