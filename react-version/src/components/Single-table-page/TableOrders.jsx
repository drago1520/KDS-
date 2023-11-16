import React from 'react'

export default function TableOrders() {
  return (
    <>
  {/*EXACTLY at center on x and y axis!*/}
  <div className="relative flex flex-col text-center items-center justify-center h-[60vh] w-[100vw] -top-16">
    <img
      src="/assets/empty.png"
      className="max-w-[300px] mx-auto h-[45vh] max-h-[400px]"
    />
    <h2 className="leading-tight text-lg mt-2">
      Не се виждат никакви поръчки. <br />
      <span className="font-normal">Браво!</span>
    </h2>
  </div>
</>

  )
}
