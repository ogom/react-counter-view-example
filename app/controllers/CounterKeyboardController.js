export default function CounterKeyboardController(model) {
  return {
    u: () => model.actions('increase'),
    d: () => model.actions('decrease')
  }
}
