import React from 'react'

function HomeEight() {
  return (
    <>
      <div className="min-h-[40vh]  grid grid-cols-12 mx-[100px]  my-[100px] gap-[30px]">
       <div className=" col-span-4  grid grid-rows-[55%_45%] gap-[20px] rounded-lg ">
         <div className=" flex flex-row  ">
          <div className="w-[30%] flex "></div>
          <div className="bg-[url(./assets/bott1.png)] bg-cover bg-center flex w-[40%] mt-[10px]"></div>
          <div className=" flex w-[30%]"></div>
          
         </div>
         <div className="grid justify-center ">
            <div className="space-y-2 text-center">
               <h2 className='font-bold text-2xl uppercase'> Free and fast delivery</h2>
               <p className='text-[18px]'>Free delivery for all orders over $140</p>
            </div>
         </div>
       </div>
       <div className=" col-span-4 grid grid-rows-[55%_45%] gap-[20px] rounded-lg ">
         <div className=" flex flex-row  ">
          <div className="w-[30%] flex "></div>
          <div className="bg-[url(./assets/bott2.png)] bg-contain bg-center bg-no-repeat flex w-[40%] mt-[10px]"></div>
          <div className=" flex w-[30%]"></div>
          
         </div>
         <div className="grid justify-center ">
            <div className="space-y-2 text-center">
               <h2 className='font-bold text-2xl uppercase'> 24/7 CUSTOMER SERVICE</h2>
               <p className='text-[19px]'>Friendly 24/7 customer support</p>
            </div>
         </div>
       </div>
       <div className=" col-span-4 grid grid-rows-[55%_45%] gap-[20px] rounded-lg ">
         <div className=" flex flex-row  ">
          <div className="w-[30%] flex "></div>
          <div className="bg-[url(./assets/boyt3.png)] bg-contain bg-center bg-no-repeat flex w-[40%] mt-[10px]"></div>
          <div className=" flex w-[30%]"></div>
          
         </div>
         <div className="grid justify-center ">
            <div className="space-y-2 text-center">
               <h2 className='font-bold text-2xl uppercase'> MONEY BACK GUARANTEE</h2>
               <p className='text-[19px]'>We reurn money within 30 days</p>
            </div>
         </div>
       </div>
      
   </div>
    </>
  )
}

export default HomeEight
