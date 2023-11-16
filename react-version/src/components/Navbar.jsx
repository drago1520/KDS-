import React from 'react'

export default function Navbar() {
  return (
    <>
  {/*REUSABLE: nav bar*/}
  <nav>
    <img
      src="/assets/nav-bar-blob.svg"
      className="w-[107vw] absolute h-28 -top-10 -left-3 z-[2]"
    />
    <img
      src="/assets/nav-bar-blob-shadow.svg"
      className="w-[107vw] absolute h-28 -top-5 left-1 z-[1] "
    />
    <img
      src="https://picsum.photos/65/33"
      className="absolute top-4 left-7 z-[3] rounded-full"
      alt="my logo"
    />
    <img
      src="/assets/hamburger-menu.svg"
      alt="menu"
      className="w-5 h-5 absolute z-[3] top-6 right-7 min-[500px]:right-16"
    />
  </nav>
  {/**/}
  </>
  )
}
