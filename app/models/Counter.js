import Subject from './Subject'

class Counter extends Subject {
  constructor() {
    super()
    this.state = 0
  }

  actions(action) {
    switch (action) {
    case 'increase':
      this.state += 1
      break
    case 'decrease':
      this.state -= 1
      break
    }

    this.notifyObservers()
  }
}

export default Counter
