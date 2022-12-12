const counterReducer = ( state = 0 , action ) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case '5':
      return state + 5
    default:
      return state;
  }
}

export default counterReducer;