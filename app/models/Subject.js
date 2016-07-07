class Subject {
  constructor() {
    this.state = undefined
    this.observers = []
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  notifyObservers() {
    this.observers.forEach(observer => observer())
  }

  getState() {
    return this.state
  }
}

export default Subject
