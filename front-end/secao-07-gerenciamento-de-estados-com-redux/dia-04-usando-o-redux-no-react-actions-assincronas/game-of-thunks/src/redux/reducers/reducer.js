import { combineReducers } from 'redux';
import { REQUEST_SUCCESSFUL } from '../actions/actions'

const INITIAL_STATE = {
  character:'',
};

const exampleReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case REQUEST_SUCCESSFUL:
    return{
      ...state,
      character: action.character[0]
    }
   default:
    return state;
 }
}

const rootReducer = combineReducers({ exampleReducer })

export default rootReducer;