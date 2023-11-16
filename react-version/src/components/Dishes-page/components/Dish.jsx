import React from 'react'

export default function Dish() {
  return (
    <>
  {/*REUSABLE: Dish*/}
  <div
    className="flex flex-wrap rounded-3xl min-[500px]:mr-16 mr-7 ml-7 mt-3 items-center"
    style={{ backgroundColor: "#F5D5ED" }}
  >
    <div className="flex-1 ">
      <h2 className="break-all text-sm font-sans font-medium mx-3.5">
        Lorem ipsum dolor sit amet, consectetur adipi.
      </h2>
    </div>
    <div className="flex flex-none w-10 h-10 relative items-center">
      <div className="rounded-full h-8 w-6 border-2 border-gray-950 border-solid flex items-center justify-center">
        <h3>0</h3>
      </div>
    </div>
  </div>
  <div
    className="flex rounded-3xl min-[500px]:mr-16 mr-7 ml-12 items-centeр h-8"
    style={{ backgroundColor: "rgba(245, 213, 237, 0.6)" }}
  >
    <div className="flex-none flex justify-start items-center ml-5">
      <img src="../assets/right-triangle.svg" className="h-4 -rotate-90" />
    </div>
    <div className="flex-none flex items-center justify-start ml-9">
      <img src="../assets/add-plus.svg" className="h-5" />
    </div>
    <div className="flex-none flex items-center justify-start ml-9">
      <img src="../assets/trash.svg" className="h-5" />
    </div>
    <div className="flex-none flex items-center justify-start ml-9">
      <img src="../assets/custom-note.svg" className="h-5" />
    </div>
  </div>
  {/**/}
</>

  )
}
