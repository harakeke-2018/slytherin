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
      <div>
        <h1>Slytherin team project has begun!</h1>
        <Link to='/questions' ><button className='startButton'>Start Slytherin Test</button></Link>

      </div>
    )
  }
}

export default Home
