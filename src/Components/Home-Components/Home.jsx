import React from 'react'

function Home() {
  return (
    <>
      <div className=' bg-amber-300 h-[50vh] grid grid-cols-12 '>
          <div className=' bg-amber-500 col-span-3 flex border-r-1 justify-center pt-[40px] pr-[40px] '>
            <ul className=' gap-[15px] flex flex-col'>
              <li>Woman’s Fashion   </li>
              <li>Men’s Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div className=' bg-amber-700 col-span-9'></div>
      </div>
    </>
  )
}

export default Home
