import React from 'react'

export default function Info() {
  return (
    <>
      <div className="flex mt-2.5">
  <div className="flex-1">
    {/* Content for column 1 */}
    <button className="border-0 bg-inherit">
      <div className="">
        <img src="/assets/back-nav.svg" className="h-12 w-10 ml-7 " />
      </div>
    </button>
  </div>
  <div className="flex-1">{/* Content for column 2 */}</div>
  <div className="flex-1 ">{/* Content for column 3 */}</div>
</div>
<div id="divider" className="pt-24 relative z-[0] h-[8vh]"></div>


    </>
  )
}
