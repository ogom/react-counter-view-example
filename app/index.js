import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './models/Counter'
import CounterTextView from './views/CounterTextView'
import CounterKeyboardController from './controllers/CounterKeyboardController'

const model = new Counter()
const controller = CounterKeyboardController(model)

function render() {
  ReactDOM.render(
    <CounterTextView
      controller={controller}
      count={model.getState()}
    />,
    document.getElementById('root')
  )
}

render()
model.addObserver(render)
