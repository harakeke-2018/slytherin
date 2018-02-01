import React from 'react'
import Home from './Home'
import Questions from './Questions'
import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Route exact path='/' component={Home}/>
        <Route path='/questions' component={Questions} />
      </div>
    </Router>
  )
}

export default App
