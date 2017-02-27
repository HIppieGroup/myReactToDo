import _ from 'lodash';

const initialState = [
{
  payload: 'hello world',
  isApply: true,
  isEding: false,
  id: 1
},
{
  payload: 'hello world',
  isApply: false,
  isEding: false,
  id: 2
}

]
  
export default function itemReducer(state=initialState, action) {

  switch (action.type) {
    case 'ADD_TASK':
        return([
        ...state,
        action.payload
      ])

    case 'TOGGLE_DONE':
      const doneItem =  state.find( item => item.id === action.doneTask );
      doneItem.isApply = !doneItem.isApply;
      return ([...state]);

    case 'DELETE_TASK':
      return ( _.remove(state,( item => item.id !== action.deleteTask )));

    case 'EDING_TASK':
      const edingItem =  state.find( item => item.id === action.editTask );
      edingItem.isEding = !edingItem.isEding;
      return ([...state]);

    case 'SAVE_EDING_TASK':
      const saveItem =  state.find( item => item.id === action.payload.taskId );
      saveItem.payload = action.payload.taskText;
      saveItem.isEding = !saveItem.isEding;
      return ([...state]);

    case 'TOGGLE_ALL':
      if (counterApply(state)) {
        return (
          _.map(state, item => {
            return {
              ...item,
              isApply: true
            }
          })
        )
      } 
      return (
        _.map(state, item => {
          return {
            ...item,
            isApply: false
          }
        })
      )

    default:
      return state;

  }
}

function counterApply(state=initialState) {
  let i = 0
  _.forEach(state, (item) => {
    if (item.isApply){ 
      i += 1;
    }
  })
  return state.length === i ? false : true

}
