import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Nav from './components/Nav'

import Home from './pages/Home/'
import Survey from './pages/Survey/'

import './global.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Nav/>
      <div className='body'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)