import { peopleReducer } from './peopleReducer';
import { profileReducer } from './profileReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  people: peopleReducer,
  profile: profileReducer,
})

export default rootReducer;