import React from 'react'

export default function CheckoutBottomNavbar() {
  return (
    <>
  {/*REUSABLE: bottom nav bar*/}
  <div className="absolute bottom-0 w-full h-[12vh]">
    {/*Shadow for background*/}
    <div
      className="absolute w-full h-full rounded-tl-3xl z-0 bottom-3.5"
      style={{ backgroundColor: "#F7BFB4" }}
    />
    {/*GRID container & Background*/}
    <div
      className="relative flex items-center rounded-tl-3xl h-full w-full"
      style={{ backgroundColor: "#EBB9DF" }}
    >
      {/*Colored Gap Before Column 1 (White Gap)*/}
      {/*Column 1*/}
      <div className="flex-1 flex justify-center">
        <img src="/assets/checkout.svg" className="h-[8vh] max-h-[80px]" />
      </div>
      {/*Colored Gap Between Columns (White Gap)*/}
      <div className="w-2 h-full" style={{ backgroundColor: "#FFE7FA" }} />
      {/*Column 2*/}
      <div className="flex-1 flex justify-center">
        <img
          src="/assets/percent-checkout.svg"
          className="h-[8vh] max-h-[80px]"
        />
      </div>
      {/*Colored Gap Between Columns (White Gap)*/}
      <div className="w-2 h-full" style={{ backgroundColor: "#FFE7FA" }} />
      {/*Column 3*/}
      <div className="flex-1 flex justify-center">
        <img src="/assets/trash.svg" className="h-[8vh] max-h-[80px]" />
      </div>
      {/*Colored Gap Between Columns (White Gap)*/}
      <div className="w-2 h-full" style={{ backgroundColor: "#FFE7FA" }} />
      {/*Column 4*/}
      <div className="flex-1 flex justify-center">
        <img src="/assets/orders.svg" className="h-[8vh] max-h-[80px]" />
        <img
          src="/assets/add-plus.svg"
          className="absolute pt-[2.5vh] h-[3vh] mah-h-[24px]"
        />
        {/* Replace with your 4th column icon */}
      </div>
    </div>
  </div>
</>

  )
}
