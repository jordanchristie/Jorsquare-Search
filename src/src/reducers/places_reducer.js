
export default function PlacesReducer(state = [], action) {
  switch (action.type) {
    case 'GET_PLACES':
      return action.places
    default: 
      return state
  }
}