import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Nav from './components/Nav'

import Home from './pages/Home/'

import Html from './pages/Html'
import Css from './pages/Css'
import JavaS from './pages/JavaS'
import NodeJS from './pages/NodeJS'
import ReactJS from './pages/ReactJS'

import './global.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Nav/>
      <div className='body'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/html" element={<Html />} />
            <Route path="/css" element={<Css />} />
            <Route path="/javaS" element={<JavaS />} />
            <Route path="/nodeJS" element={<NodeJS />} />
            <Route path="/reactJS" element={<ReactJS />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)