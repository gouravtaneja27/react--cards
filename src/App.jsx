import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
// import Card from "./components/Card";
// import CardDetail from "./pages/CardDetail";
import StudentList from "./components/StudentList";
import StudentDetail from "./components/StudentDetail";

import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<StudentList />} />

        <Route path="/student/:id" element={<StudentDetail />} />
          {/* <Route path="/" element={<Card />} />
        <Route path="/card/:id/:title" element={<CardDetail />} /> */}
        </Routes>

    </>
  )
}

export default App
