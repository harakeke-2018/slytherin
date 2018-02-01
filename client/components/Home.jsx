import React from 'react'
import {Route, Link} from 'react-router-dom'
import Questions from './Questions'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='container'>
        <div className='titleContainer'>
          <h1>Are you a true Slytherin?</h1>
        </div>
        <div className='middleContainer'>
          <div className='content'>
            <p>So the sorting hat has assigned you to our prestigious house.</p>
            <p>But a true Slytherin will uphold our tradition and keep our house pure!</p>
            <p>Take this test if you dare...</p>
          </div>
        </div>
        <div className='buttonContainer'>
          <Link to='/questions' ><button className='startButton'>Start Slytherin Test</button></Link>
        </div>
      </div>
    )
  }
}

export default Home
