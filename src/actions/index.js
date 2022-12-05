export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num,
  }
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const loggedt = () => {
  return {
    type: 'LOGGED_IN'
  }
}