import React from 'react'
import SingleCategory from './SingleCategory'
import PageNumberDots from "../../PagaNumberDots";

export default function CategoriesContent() {
  //#Use .map() depending on viewWidth
  return (
    <>
  {/*Categories*/}
  <div className=" w-full mt-3">
    {" "}
    {/*В зависимост от viewHeight (px) ще се определя колко категории наведнъж*/}
    <div className="ml-7 min-[500px]:mr-16 mr-7">
      <SingleCategory />
      <SingleCategory />
      <SingleCategory />
      <SingleCategory />
      <SingleCategory />
    </div>
    <PageNumberDots />
  </div>
</>

  )
}
