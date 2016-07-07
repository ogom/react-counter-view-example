import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class CounterTextView extends Component {
  componentDidMount() {
    window.document.addEventListener(
      'keydown',
      this.handleKeyDown.bind(this)
    )
  }

  handleKeyDown(e) {
    this.props.controller[e.key]()
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Key Downed: {this.props.count} times</p>
        <div>Increase in the key of u (up).</div>
        <div>Decrease in the key of d (down).</div>
      </div>
    )
  }
}

export default CounterTextView
