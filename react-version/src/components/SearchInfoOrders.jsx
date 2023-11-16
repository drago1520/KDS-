import React from 'react'

export default function SearchInfoOrders() {
  return (
    <>
  <div id="divider" className="pt-24 relative z-[0] h-[8vh]"></div>
  <img src="/assets/info-icon.svg" className="h-5 w-5 ml-3.5" />
  {/*REUSABLE: info icon + 2 additional columns if needed more content*/}
  <div className="flex mt-2.5">
    <div className="flex-1">
      <button className="border-0 bg-inherit">
        <img src="/assets/back-nav.svg" className="h-12 w-10 ml-7 " />
      </button>
    </div>
    <div
      className="flex-1 flex border-0 rounded-3xl items-center"
      style={{ backgroundColor: "#EBB9DF" }}
    >
      {" "}
      {/*#expand the whole line when tapped & hide other flexbox items*/}
      {/* Content for column 2 */}
      <img src="/assets/search-icon.png" className="h-7 pl-1.5" />
      <input
        type="text"
        className="flex-1 bg-transparent border-none outline-none px-2 w-full"
        placeholder="намери ястия"
      />
    </div>
    <div className="flex-1">
      {/* Content for column 3 */} {/*Text inside image!*/}
      <div className="flex justify-end relative h-14 min-[500px]:mr-16 mr-7">
        {" "}
        {/* Set a height matching the image for proper centering */}
        <img
          src="/assets/orders.svg"
          className="max-w-full h-full  relative z-[0]"
        />
        <div className="flex absolute h-full w-[42.5px] justify-center items-center z-[1]">
          <h2>1</h2>
        </div>{" "}
        {/*Width & Height as much as the picture (background)*/}
      </div>
    </div>
  </div>
  {/**/}
</>

  )
}
