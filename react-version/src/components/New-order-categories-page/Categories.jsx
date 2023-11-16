import React from 'react';
import Navbar from '../Navbar';
import SearchInfoOrders from '../SearchInfoOrders';
import CategoriesContent from './components/CategoriesContent';
import SendOrder from "../SendOrder";

export default function Categories() {
  return (
    <>
      <Navbar />
      <SearchInfoOrders />
      <CategoriesContent />
      <SendOrder />
    </>
  )
}
