import React from 'react'

export default function SendOrder() {
  return (
    <>
  {/*RESUABLE: Divide/ Send order button bottom*/}
  <div className=" absolute bottom-0 w-full h-[9vh] mb-2">
    <div className="flex items-end h-full space-x-3 ml-7 min-[500px]:mr-16 mr-7">
      <div
        className="flex flex-2 bg-gray-200 rounded-3xl h-full justify-center items-center"
        style={{ backgroundColor: "#D991BA" }}
      >
        {/* Content for the smaller column */}
        <h3 className="font-normal font-sans text-base">Раздели поръчката</h3>
      </div>
      <div
        className="flex flex-1 rounded-3xl h-full justify-center items-center"
        style={{ backgroundColor: "#EBB9DF" }}
      >
        {/* Content for the larger column */}
        <img
          src="/assets/send.png"
          className=" max-w-[40px] w-[6vw] rotate-[30deg] mt-3"
        />
      </div>
    </div>
  </div>
</>

  )
}
