import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BiNotepad } from 'react-icons/bi';
import { GoBook } from 'react-icons/go';
import { FaTable } from 'react-icons/fa';
import { GrScorecard } from 'react-icons/gr';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <div className="fullcontainer">
        <Navbar />
        <div className="grid-container">
          <div className="item"><Link to="/tt"><span className='icon'><FaTable /></span><h4>Time Table</h4></Link></div>
          <div className="item"><Link to="/study-material"><span className='icon'><GoBook /></span><h4>Study Materials</h4></Link></div>
          <div className="item"><Link to="/events"><span className='icon'><BiNotepad /></span><h4>Events</h4></Link></div>
          <div className="item"><Link to="/marks"><span className='icon'><GrScorecard /></span><h4>Placement Points</h4></Link></div>
        </div>
      </div>
    </div>
  )
}
