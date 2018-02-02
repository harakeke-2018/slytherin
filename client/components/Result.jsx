import React from 'react'
import Questions from './Questions'
import {Route, Link} from 'react-router-dom'

class Result extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    const totalScore = Number(this.props.score)
    let resultImg = ''
    let resultMsg = ''
    if (totalScore === 5) {
      resultImg = '/img/slytherin-win.gif'
      resultMsg = 'Congratulations! You are one of us.'
    } else {
      resultImg = '/img/slytherin-lose.gif'
      resultMsg = 'Vile worm! You\'re just a Griffyndor in disguise'
    }

    return (

      <div className='resultContainer'>

        <div className='resultImg'>
          <img src={resultImg} alt="result-image"/>
        </div>
        
        <div className='middleContainer'>
          <p>{resultMsg}</p>
        </div>
        <div>
        <Link to='/' ><button className='startButton'>Re-Take Test</button></Link>
        </div>
      </div>
    )
  }
}

export default Result