import React from 'react'
import Questions from './Questions'

class Result extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    // const totalScore = Number(this.props.scores)
    const totalScore = 5
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

      <div className='container'>
        <div className='resultImg'>
          <img src={resultImg} alt="result-image"/>
        </div>
        <div className='middleContainer'>
          <p>{resultMsg}</p>
        </div>

      </div>
    )
  }
}

export default Result