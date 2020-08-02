import { ADD_ORDER, ordersState } from "./actions"

const initialState = { ...ordersState }

function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER:
      return Object.assign({}, state, {
        totalOrders: [...state.totalOrders, action.orders]
      })
    default:
      return state
  }
}

export default loaderReducer
