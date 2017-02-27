const initialState = null;

export default function filterReducer(state=initialState, action) {
  switch (action.type) {
    case 'DISPLAY_ALL':
      return null;
    case 'DISPLAY_DONE':
      return true;
    case 'DISPLAY_ACTIVE':
      return false;

    default: 
      return state;
  }
}