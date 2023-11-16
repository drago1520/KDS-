import React from 'react'

export default function PagaNumberDots() {
  return (
    <>
  {/*REUSABLE: page number, dots*/}
  <div className="flex mt-2 justify-center w-full h-4 space-x-1.5">
    <div
      className="flex-initial rounded-full w-4 h-4"
      style={{ backgroundColor: "#D991BA" }}
    />
    <div
      className="flex-initial rounded-full w-4 h-4"
      style={{ backgroundColor: "#EBB9DF" }}
    />
    <div
      className="flex-initial rounded-full w-4 h-4"
      style={{ backgroundColor: "#EBB9DF" }}
    />
  </div>
</>

  )
}
