import './App.css';
import TablesPage from './components/TablesPage/Tables';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleTable from './components/Single-table-page/SingleTable';
import { useEffect } from 'react';
import PreventScroll from './utils/PreventScroll';
import SingleDish from "./components/Single-dish-page/SingleDish";
import Categories from "./components/New-order-categories-page/Categories";
import Dishes from './components/Dishes-page/Dishes';


function App() {
  
  useEffect(() => {
    PreventScroll();
  }, [])
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TablesPage />} />
        <Route path="/single-table" element={<SingleTable />} />
        <Route path='/single-dish' element={<SingleDish />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/dishes" element={<Dishes />} />
      </Routes>
    </Router>

  )
}

export default App
