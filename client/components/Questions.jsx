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
          question: 'What do you think of Muggles? (They call themselves humans)',
          btn1: { isTrue: false, text: 'I\'m gonna vomit thinking about them' },
          btn2: { isTrue: true, text: 'I love mudbloods' }
        },
        {
          question: 'What is (or would be) your best class at Hogwarts?',
          btn1: { isTrue: false, text: 'Care of Magical Creatures' },
          btn2: { isTrue: true, text: 'Potions' }
        },
        {
          question: 'Who did Christmas better?',
          btn1: { isTrue: false, text: 'Santa' },
          btn2: { isTrue: true, text: 'Grinch' }
        },
        {
          question: 'Which famous wizard was a Slytherin?',
          btn1: { isTrue: false, text: 'Albus Dumbledore' },
          btn2: { isTrue: true, text: 'Merlin' }
        },
        {
          question: 'Do you think you are brave?',
          btn1: { isTrue: false, text: 'Yes' },
          btn2: { isTrue: true, text: 'No' }
        },
        {
          question: 'Who is our house ghost?',
          btn1: { isTrue: false, text: 'Moaning Myrtle' },
          btn2: { isTrue: true, text: 'Bloody Baron' }
        },
        {
          question: 'What do you think of Harry Potter?',
          btn1: { isTrue: true, text: 'He\'s just famous' },
          btn2: { isTrue: false, text: 'He\'s the-boy-who-lived' }
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
        question: 'Which parent do you look up to?',
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
          <h1>{this.state.currentQ.question} {this.state.score}</h1>
          <button type="button" onClick={() => this.updatePageandTotal(this.state.currentQ.btn1.isTrue)}>{this.state.currentQ.btn1.text}</button><br />
          <button type="button" onClick={() => this.updatePageandTotal(this.state.currentQ.btn2.isTrue)}>{this.state.currentQ.btn2.text}</button>
        </div>
      </div>
    )
  }
}

export default Questions
