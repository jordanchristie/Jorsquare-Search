import React from "react";

const Places = ({ breweries }) => {
  const renderBreweries = () => {
    return breweries.map((brewery) => (
      <div key={brewery.id} className="card small center-align">
        <h3>
          <a href={brewery.url}>{brewery.name}</a>
        </h3>
        <h5>
          <i className="material-icons">location_on</i>
          {brewery.location.address} {brewery.location.city},{" "}
          {brewery.location.state} {brewery.location.postalCode}
        </h5>
        <h5>
          <i className="material-icons">local_phone</i>
          {brewery.contact.formattedPhone}
        </h5>
        <p>
          <i className="material-icons">check_circle</i>
          {brewery.stats.checkinsCount} Checkins
        </p>
      </div>
    ));
  };

  return (
    <ul className="card-wrapper">
      {breweries ? renderBreweries() : <h1>Search to get started</h1>}
    </ul>
  );
};

export default Places;
