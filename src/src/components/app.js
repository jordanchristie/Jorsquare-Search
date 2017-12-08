import React from 'react';
import { connect }from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './header'
import SearchBar from './search_bar';
import Places from './places';


const App = (props) => {

  return (
    <div className="container">
      <Header />
      <SearchBar fetchPlaces={props.fetchPlaces} />
      <Places places={props.places} />
    </div>
  )

}



export default App;