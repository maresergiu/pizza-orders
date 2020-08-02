// init loader state
export const ordersState = {
  totalOrders: []
}

// actions types
export const ADD_ORDER = "ADD_ORDER"

// action creators
export function addOrder(orderObj) {
  return { type: ADD_ORDER, orders: orderObj }
}
