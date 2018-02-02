import React from 'react'
import Questions from './Questions'

class Result extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // score: this.props.score
    }
  }

  render () {
    const totalScore = Number(this.props.score)
    // const totalScore = this.state.finalScore
    let resultImg = ''
    let resultMsg = ''
    if (totalScore >= 5) {
      resultImg = '/img/slytherin-win.gif'
      resultMsg = 'Congratulations! You are one of us.'
    } else {
      resultImg = '/img/slytherin-lose.gif'
      resultMsg = 'Vile worm! You\'re just a Griffyndor in disguise'
    }

    return (

      <div className='middleContainer'>
        <div className='content'>
          <img src={resultImg} alt="result-image"/>
          <p>{resultMsg}</p>
        </div>

      </div>
    )
  }
}

export default Result
