import './App.css';
import TablesPage from './components/TablesPage/Tables';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleTable from './components/Single-table-page/SingleTable';
import { useEffect } from 'react';
import PreventScroll from './utils/PreventScroll';


function App() {
  
  useEffect(() => {
    PreventScroll();
  }, [])
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TablesPage />} />
        <Route path="/single-table" element={<SingleTable />} />
      </Routes>
    </Router>

  )
}

export default App
