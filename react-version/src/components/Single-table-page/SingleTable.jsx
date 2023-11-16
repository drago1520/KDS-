import React from 'react'
import Info from './components/Info'
import Navbar from "../Navbar"
import TableOrders from './components/TableOrders'
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
