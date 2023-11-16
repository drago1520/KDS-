import React from 'react'

export default function Tables() {
  return (
    <>
      {/*Tables 198px from top*/}
  <div className="absolute top-[198px] w-full">
    <img
      src="/assets/table-blob.svg"
      className="absolute z-[2] h-[45vh] w-[103vw] -left-5"
    />
  </div>
  <div className="absolute parent grid grid-cols-3 grid-rows-3 gap-0 custom-width h-[40vh] ml-7">
    {/*Column 1*/}
    <div className=" col-start-1 col-end-2 row-start-1 row-end-2 justify-self-start ">
      <div className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5  rounded-full" />
      <img src="/assets/table-icon-2.svg" className="h-14 relative z-[4]" />
      <img
        src="/assets/table-shadow-icon.svg"
        className="h-14 absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2 />
      </div>
    </div>
    <div className=" col-start-1 col-end-2 row-start-2 row-end-3 justify-self-start ">
      <div className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5 rounded-full" />
      <img src="/assets/table-icon-2.svg" className="h-14 relative z-[4]" />
      <img
        src="/assets/table-shadow-icon.svg"
        className="h-14 absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2 />
      </div>
    </div>
    <div className=" col-start-1 col-end-2 row-start-3 row-end-4 justify-self-start ">
      <div className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5 rounded-full" />
      <img src="/assets/table-icon-3.svg" className="h-14 relative z-[4] " />
      <img
        src="/assets/table-shadow-icon.svg"
        className="h-14 absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2 />
      </div>
    </div>
    {/*Column 2*/}
    <div className=" col-start-2 col-end-3 row-start-3 row-end-4 justify-self-center">
      <div className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5  rounded-full" />
      <img src="/assets/table-icon-3.svg" className="h-14 relative z-[4]" />
      <img
        src="/assets/table-shadow-icon.svg"
        className="h-14 absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2 />
      </div>
    </div>
    <div className=" col-start-2 col-end-3 row-start-2 row-end-3 justify-self-center">
      <div className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5  rounded-full" />
      <img src="/assets/table-icon-3.svg" className="h-14 relative z-[4]" />
      <img
        src="/assets/table-shadow-icon.svg"
        className="h-14 absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2 />
      </div>
    </div>
    <div className=" col-start-2 col-end-3 row-start-1 row-end-2  justify-self-center">
      <div
        className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5 bg-green-500 rounded-full"
        style={{ backgroundColor: "#710000" }}
      >
        {" "}
      </div>
      <img src="/assets/table-icon-1.svg" className="h-14 relative z-[4] " />
      <img
        src="/assets/table-shadow-icon.svg"
        className="h-14 absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2>1</h2>
      </div>
    </div>
    {/*Column 3*/}
    <div className=" col-start-3 col-end-4 row-start-1 row-end-2 justify-self-end">
      <div
        className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5 bg-green-500 rounded-full"
        style={{ backgroundColor: "#1D74C1" }}
      />
      <img src="/assets/table-icon-1.svg" className="h-14 relative z-[4] " />
      <img
        src="/assets/table-shadow-icon.svg"
        className="h-14 absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2>2</h2>
      </div>{" "}
    </div>
    <div className=" col-start-3 col-end-4 row-start-2 row-end-3 justify-self-end">
      <div
        className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5 bg-green-500 rounded-full"
        style={{ backgroundColor: "#1D74C1" }}
      />
      <img src="/assets/table-icon-1.svg" className="h-14 relative z-[4] " />
      <img
        src="/assets/table-shadow-icon.svg"
        className="h-14 absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2>3</h2>
      </div>{" "}
    </div>
    <div className=" col-start-3 col-end-4 row-start-3 row-end-4 justify-self-end">
      <div
        className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5 bg-green-500 rounded-full"
        style={{ backgroundColor: "#60992D" }}
      />
      <img src="/assets/table-icon-1.svg" className="h-14 relative z-[4] " />
      <img
        src="/assets/table-shadow-icon.svg"
        className="h-14  absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2>4</h2>
      </div>
    </div>
  </div>
  <img
    src="/assets/table-blob-shadow.svg"
    className="relative h-[45vh] w-[103vw] z-[1]"
  />
    </>
  )
}
