import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/contact'
import Navbar from './components/Navbar'

import './styles/style.scss'

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
)

export default App