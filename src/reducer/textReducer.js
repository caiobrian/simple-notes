export const initialTextState = {
  title: '',
  body: ''
}

export const textReducer = (state, action) => {
  switch (action.type) {
    case 'WRITE_TITLE':
      return { ...state, title: action.payload }
    case 'WRITE_BODY':
      return { ...state, body: action.payload }
    case 'RESET':
      return { ...initialTextState }
    default:
      return state
  }
}
