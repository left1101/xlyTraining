
function index(state = {
  count: 0
}, action) {
  switch (action.type) {
    case 'ADD_NUM':
      return { count: action.num }
    default:
      return state
  }
}

export default index