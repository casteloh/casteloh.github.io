import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/contact'
import Navbar from './components/Navbar'

import './styles/style.scss'

const App = () => (
  <HashRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </HashRouter>
)

export default App