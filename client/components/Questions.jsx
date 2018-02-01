import React from 'react'
import { Route, Link } from 'react-router-dom'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 0,
      testQs: [
        {
          question: 'Question 1',
          btn1: {isTrue: true, text: 'hello'},
          btn2: {isTrue: false, text: 'bye'}
        },
        {
          question: 'Question 2',
          btn1: {isTrue: true, text: 'hello'},
          btn2: {isTrue: false, text: 'bye'}
        },
        {
          question: 'Question 3',
          btn1: {isTrue: true, text: 'hello'},
          btn2: {isTrue: false, text: 'bye'}
        },
        {
          question: 'Question 4',
          btn1: {isTrue: true, text: 'hello'},
          btn2: {isTrue: false, text: 'bye'}
        },
        {
          question: 'Question 5',
          btn1: {isTrue: true, text: 'hello'},
          btn2: {isTrue: false, text: 'bye'}
        },
        {
          question: 'Question 6',
          btn1: {isTrue: true, text: 'hello'},
          btn2: {isTrue: false, text: 'bye'}
        },
        {
          question: 'Question 7',
          btn1: {isTrue: true, text: 'hello'},
          btn2: {isTrue: false, text: 'bye'}
        }
      ],
      currentQ: {
        question: 'Question 0',
        btn1: {isTrue: true, text: 'hello'},
        btn2: {isTrue: false, text: 'bye'}
      }
    }
    this.updatePageandTotal = this.updatePageandTotal.bind(this)
  }

  updatePageandTotal (num) {
    if (this.state.testQs.length !== 0) {
      this.setState({
        score: this.state.score + num,
        currentQ: this.state.testQs.shift()
      })
    }
  }

  render () {
    return (
      <div>
        <h1>{this.state.currentQ.question} {this.state.score}</h1>
        <button type="button" onClick={() => this.updatePageandTotal(this.state.currentQ.btn1.isTrue)}>{this.state.currentQ.btn1.text}</button>
        <button type="button" onClick={() => this.updatePageandTotal(this.state.currentQ.btn2.isTrue)}>{this.state.currentQ.btn2.text}</button>
      </div>
    )
  }
}

export default Questions
