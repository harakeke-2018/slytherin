import React from 'react'
import Home from './Home'
import Questions from './Questions'
import Result from './Result'
import { HashRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 0
    }
    this.scoreGrab = this.scoreGrab.bind(this)
  }

  scoreGrab (num) {
    this.setState({
      score: num
    })
  }

  render () {
    return (
      <Router>
        <div className='container'>
          <div className='titleContainer'>
            <h1>Are you a true Slytherin?</h1>
            {/* <h1>{this.state.score}</h1> */}
          </div>
          <main>
            <Route exact path='/' component={Home} />
            <Route path='/questions' render={() => {
              return <Questions scoreGrab={this.scoreGrab} finalScore={this.state.score} />
            }} />
            <Route path='/result' component={Result} />
          </main>
        </div>
      </Router>
    )
  }

}

export default App
