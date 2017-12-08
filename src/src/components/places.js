import React, { Component } from 'react';
import { connect } from 'react-redux';


class Places extends Component {
    constructor(props) {
      super(props);
      
      this.renderPlaces = this.renderPlaces.bind(this);
    }


    renderPlaces(places, id) {
      console.log(this.props.places)
      places = this.props.places
        return places.map((place, id) => {
          return (
            <div key={place.id} className="card small center-align">
              <h3><a href={place.url}>{place.name}</a></h3>
              <h5><i className="material-icons">location_on</i>{place.location.address} {place.location.city}, {place.location.state} {place.location.postalCode}</h5>
              <h5><i className="material-icons">local_phone</i>{place.contact.formattedPhone}</h5>
              <p><i className="material-icons">check_circle</i>{place.stats.checkinsCount} Checkins</p>
            </div>
          )
        })
    }

  render() {
    return (
      <ul>
        {this.renderPlaces()}
      </ul>
    )
  }

}

function mapStateToProps(state) {
  return {
    places: state.places
  }
}

export default connect(mapStateToProps, null)(Places);