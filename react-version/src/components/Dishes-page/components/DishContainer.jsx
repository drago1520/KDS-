import React from 'react'
import Dish from "./Dish";
import PagaNumberDots from '../../PagaNumberDots';

export default function DishContainer() {

  //#Use .map() depending on viewHeight
  return (
  <>
    <Dish />
    <Dish />
    <Dish />
    <PagaNumberDots />
  </>
    
  )
}
