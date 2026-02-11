import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import CardDetail from "./pages/CardDetail";

import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/card/:name" element={<CardDetail />} />
        </Routes>

    </>
  )
}

export default App
