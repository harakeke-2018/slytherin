import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      finished: false,
      score: 0,
      testQs: [
        {
          question: 'Who did Christmas better?',
          btn1: { isTrue: false, text: 'Santa' },
          btn2: { isTrue: true, text: 'Grinch' }
        },
        {
          question: 'Do you think you are brave?',
          btn1: { isTrue: false, text: 'Yes' },
          btn2: { isTrue: true, text: 'No' }
        },
        {
          question: 'What do you think of Voldemort?',
          btn1: { isTrue: true, text: 'He is cool' },
          btn2: { isTrue: false, text: 'He is evil' }
        },
        {
          question: 'Hogwarts is under attack, would you:',
          btn1: { isTrue: true, text: 'Leave' },
          btn2: { isTrue: true, text: 'Stay' }
        }
      ],
      currentQ: {
        question: 'Whose child are you more proud to be?',
        btn1: { isTrue: false, text: 'Mum' },
        btn2: { isTrue: true, text: 'Dad' }
      }
    }
    this.updatePageandTotal = this.updatePageandTotal.bind(this)
    this.scoreGrab = this.props.scoreGrab.bind(this)
  }

  updatePageandTotal (num) {
    if (this.state.testQs.length !== 0) {
      this.setState({
        score: this.state.score + num,
        currentQ: this.state.testQs.shift()
      })
    } else {
      this.props.scoreGrab(this.state.score + num)
      this.setState({
        finished: true
      })
    }
  }

  render () {
    if (this.state.finished) {
      return <Redirect to='/result' />
    }
    return (
      <div className='middleContainer'>
        <div className='content'>
          <h1>{this.state.currentQ.question}</h1>
          <div className='buttonContainer'>
            <button type="button" className="startButton" onClick={() => this.updatePageandTotal(this.state.currentQ.btn1.isTrue)}>{this.state.currentQ.btn1.text}</button>
            <button type="button" className="startButton" onClick={() => this.updatePageandTotal(this.state.currentQ.btn2.isTrue)}>{this.state.currentQ.btn2.text}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Questions
