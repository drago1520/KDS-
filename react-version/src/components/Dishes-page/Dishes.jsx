import React from 'react'
import Navbar from '../Navbar'
import SearchInfoOrders from "../SearchInfoOrders"
import DishContainer from './components/DishContainer'
import SendOrders from "../SendOrder";

export default function Dishes() {
  return (
    <>
      <Navbar />
      <SearchInfoOrders />
      <DishContainer />
      <SendOrders />
    </>
  )
}
