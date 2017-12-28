export function fetchPlaces (city) {

  const CLIENT_ID = '2V03IPZCGBAOXVGP2IK5SV3QLHOUNKBXJTNKVBHEXXLQI4QT';
  const CLIENT_SECRET = '4RLMJD1GPZEBFX2OIOOLLSQO1N1SB1YZC5I150MAK4A2XYF2';
  const URL = `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&near=${city}&query=restaurant&v=20171130`;

//Where the real magic happens (API Call)
  return dispatch => {
      fetch(URL)
        .then(res => res.json())
        .then(places => dispatch(getPlaces(places)))
        .catch(error => console.log('Please enter a valid city.'))
      
  }
}


//Shoots data to rootReducer
export function getPlaces (places) {
  places = places.response.venues
  
  return {
    type: 'GET_PLACES',
    places: places,
  }
}

