import React from 'react'

export default function BottomNavbar3() {
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
      className="relative flex items-center h-full w-full rounded-tl-3xl"
      style={{ backgroundColor: "#EBB9DF" }}
    >
      {/*Colored Gap Before Column 1 (White Gap)*/}
      <div className="w-2" style={{ backgroundColor: "#FFE7FA" }} />
      {/*Column 1*/}
      <div className="flex-1 flex justify-center">
        <img
          src="/assets/table-nav-bar.svg"
          className="h-[7vh] max-h-[60px]"
        />
      </div>
      {/*Colored Gap Between Column 1 and 2 (White Gap)*/}
      <div className="w-2 h-full" style={{ backgroundColor: "#FFE7FA" }} />
      {/*Column 2*/}
      <div className="flex-1 flex justify-center">
        <img src="/assets/orders.svg" className="h-[8vh] max-h-[80px]" />
      </div>
      {/*Colored Gap Between Column 2 and 3 (White Gap)*/}
      <div className="w-2 h-full" style={{ backgroundColor: "#FFE7FA" }} />
      {/*Column 3*/}
      <div className="flex-1 flex justify-center">
        <img src="/assets/check-order.png" className="h-[8vh] max-h-[80px]" />
      </div>
      {/*Colored Gap After Column 3 (White Gap)*/}
      <div className="w-5" style={{ backgroundColor: "#FFE7FA" }} />
    </div>
  </div>
  {/**/}  
    </>
  )
}
