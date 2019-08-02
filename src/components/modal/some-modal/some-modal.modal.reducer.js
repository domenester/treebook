const INITIAL_STATE = { isOpen: false };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "CLOSE":
      return { ...state, isOpen: action.payload }
    case "OPEN":
      return { ...state, isOpen: action.payload }
    default:
      return state
  }
}