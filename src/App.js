import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import House from './pages/House'

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/casa1" element={<Home />} />
                <Route path="/casa2" element={<House />} />
                <Route path="/casa3" element={<House />} />
            </Routes>
        </div>
    )
}

export default App
