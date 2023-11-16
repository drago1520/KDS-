import './App.css';

function App() {
  
  return (
    <>
  {/*REUSABLE: nav bar*/}
  <nav>
    <img
      src="../assets/nav-bar-blob.svg"
      className="w-[107vw] absolute h-28 -top-10 -left-3 z-[2]"
    />
    <img
      src="../assets/nav-bar-blob-shadow.svg"
      className="w-[107vw] absolute h-28 -top-5 left-1 z-[1] "
    />
    <img
      src="https://picsum.photos/65/33"
      className="absolute top-4 left-7 z-[3] rounded-full"
      alt="my logo"
    />
    <img
      src="../assets/hamburger-menu.svg"
      alt="menu"
      className="w-5 h-5 absolute z-[3] top-6 right-7 min-[500px]:right-16"
    />
  </nav>
  {/**/}
  <div id="divider" className="pt-24 relative z-[0] h-[8vh]"></div>
  <img src="../assets/info-icon.svg" className="h-5 w-5 ml-3.5" />
  <div className="relative mb-11"></div>
  {/*Tables 198px from top*/}
  <div className="absolute top-[198px] w-full">
    <img
      src="../assets/table-blob.svg"
      className="absolute z-[2] h-[45vh] w-[103vw] -left-5"
    />
  </div>
  <div className="absolute parent grid grid-cols-3 grid-rows-3 gap-0 custom-width h-[40vh] ml-7">
    {/*Column 1*/}
    <div className=" col-start-1 col-end-2 row-start-1 row-end-2 justify-self-start ">
      <div className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5  rounded-full" />
      <img src="../assets/table-icon-2.svg" className="h-14 relative z-[4]" />
      <img
        src="../assets/table-shadow-icon.svg"
        className="h-14 absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2 />
      </div>
    </div>
    <div className=" col-start-1 col-end-2 row-start-2 row-end-3 justify-self-start ">
      <div className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5 rounded-full" />
      <img src="../assets/table-icon-2.svg" className="h-14 relative z-[4]" />
      <img
        src="../assets/table-shadow-icon.svg"
        className="h-14 absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2 />
      </div>
    </div>
    <div className=" col-start-1 col-end-2 row-start-3 row-end-4 justify-self-start ">
      <div className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5 rounded-full" />
      <img src="../assets/table-icon-3.svg" className="h-14 relative z-[4] " />
      <img
        src="../assets/table-shadow-icon.svg"
        className="h-14 absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2 />
      </div>
    </div>
    {/*Column 2*/}
    <div className=" col-start-2 col-end-3 row-start-3 row-end-4 justify-self-center">
      <div className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5  rounded-full" />
      <img src="../assets/table-icon-3.svg" className="h-14 relative z-[4]" />
      <img
        src="../assets/table-shadow-icon.svg"
        className="h-14 absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2 />
      </div>
    </div>
    <div className=" col-start-2 col-end-3 row-start-2 row-end-3 justify-self-center">
      <div className="absolute z-[7] mb-5 ml-5 h-3.5 w-3.5  rounded-full" />
      <img src="../assets/table-icon-3.svg" className="h-14 relative z-[4]" />
      <img
        src="../assets/table-shadow-icon.svg"
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
      <img src="../assets/table-icon-1.svg" className="h-14 relative z-[4] " />
      <img
        src="../assets/table-shadow-icon.svg"
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
      <img src="../assets/table-icon-1.svg" className="h-14 relative z-[4] " />
      <img
        src="../assets/table-shadow-icon.svg"
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
      <img src="../assets/table-icon-1.svg" className="h-14 relative z-[4] " />
      <img
        src="../assets/table-shadow-icon.svg"
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
      <img src="../assets/table-icon-1.svg" className="h-14 relative z-[4] " />
      <img
        src="../assets/table-shadow-icon.svg"
        className="h-14  absolute z-[3] -ms-6 mt-1"
      />
      <div className="relative z-[5] -top-16 left-1.5">
        <h2>4</h2>
      </div>
    </div>
  </div>
  <img
    src="../assets/table-blob-shadow.svg"
    className="relative h-[45vh] w-[103vw] z-[1]"
  />
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
          src="../assets/table-nav-bar.svg"
          className="h-[7vh] max-h-[60px]"
        />
      </div>
      {/*Colored Gap Between Column 1 and 2 (White Gap)*/}
      <div className="w-2 h-full" style={{ backgroundColor: "#FFE7FA" }} />
      {/*Column 2*/}
      <div className="flex-1 flex justify-center">
        <img src="../assets/orders.svg" className="h-[8vh] max-h-[80px]" />
      </div>
      {/*Colored Gap Between Column 2 and 3 (White Gap)*/}
      <div className="w-2 h-full" style={{ backgroundColor: "#FFE7FA" }} />
      {/*Column 3*/}
      <div className="flex-1 flex justify-center">
        <img src="../assets/check-order.png" className="h-[8vh] max-h-[80px]" />
      </div>
      {/*Colored Gap After Column 3 (White Gap)*/}
      <div className="w-5" style={{ backgroundColor: "#FFE7FA" }} />
    </div>
  </div>
  {/**/}
</>

  )
}

export default App
