import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Timetable from '../pages/Timetable'
import Home from '../Home'
import Mark from '../pages/Mark'
import Events from '../pages/Events'
import Add from '../pages/StudyMaterial'
import Materials from './Materials'

export default function Routespath() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tt" element={<Timetable />} />
            <Route path="/study-material" element={<Add />} />
            <Route path="/events" element={<Events />} />
            <Route path="/marks" element={<Mark />} />
            <Route path="/ST" element={<Materials />} />

        </Routes>
    </Router>
  )
}
