import { createStore } from 'redux'

const initialState = {
  count: 0
}

// Reducer

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      }
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      }
    case "RESET":
      return {
        count: initialState.count
      }
    case "SET":
      return {
        count: action.setTo
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

const incrementCount = ({ incrementBy=1 }={}) => ({
  type: "INCREMENT",
  incrementBy
})

const decrementCount = ({ decrementBy=1 }={}) => ({
  type: "DECREMENT",
  decrementBy
})

const setCount = ({ setTo }={}) => ({
  type: "SET",
  setTo
})

const resetCount = () => ({ type: "RESET" })





store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch(incrementCount({
  incrementBy: 5
}))

store.dispatch(decrementCount({
  decrementBy: 5
}))

store.dispatch(decrementCount({
  decrementBy: 2
}))

store.dispatch(setCount({
  setTo: 2
}))

store.dispatch(resetCount())
