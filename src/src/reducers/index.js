import PlacesReducer from './places_reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  places: PlacesReducer,
  })

export default rootReducer;