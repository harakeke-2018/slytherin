import React from 'react'
import {Route, Link} from 'react-router-dom'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 0
    }
    this.testScore = this.testScore.bind(this)
  }

  testScore () {
    this.setState({
      score: this.state.score + 1
    })
  }

  render () {
    return (
      <div>
        <h1>Questions {this.state.score}</h1>
        <button type="button" onClick={this.testScore}>Test</button>
      </div>
    )
  }
}

export default Questions
