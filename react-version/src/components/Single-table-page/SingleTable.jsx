import React from 'react'
import Info from './Info'
import Navbar from "../Navbar"
import TableOrders from './TableOrders'
import BottomNavbar from "../CheckoutBottomNavbar"

export default function SingleTable() {
  return (
    <>
      <Navbar />
      <Info />
      <TableOrders />
      <BottomNavbar />
    </>
  )
}
