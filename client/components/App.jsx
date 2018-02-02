import React from 'react'
import Home from './Home'
import Questions from './Questions'
import { HashRouter as Router, Route } from 'react-router-dom'
import Result from './Result'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Router>
        <div className='container'>
          <div className='titleContainer'>
            <h1>Are you a true Slytherin?</h1>
          </div>
          <main>
            <Route exact path='/' component={Home} />
            <Route path='/questions' component={Questions} />
            <Route path='/result' component={Result} />
          </main>
        </div>
      </Router>
    )
  }
}

export default App
