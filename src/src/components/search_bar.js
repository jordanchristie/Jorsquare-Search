import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';



class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {city: '' }

    this.updateCity = this.updateCity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetCity = this.resetCity.bind(this);
  }

  updateCity(e) {
    this.setState({ city: e.target.value })
  }

  resetCity() {
    this.setState({ city: '' })
  }


  handleSubmit(e) {
    e.preventDefault();

    if (this.state.city !== '') {

    this.props.fetchPlaces(this.state.city);

    }

    this.resetCity()
  }


  render() {
    
    return (
      <form 
        onSubmit={this.handleSubmit}
        className="col s6">
        <input 
          placeholder="Enter a City"
          onChange={this.updateCity} 
          className="input-field col s6" />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    places: state.places
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);