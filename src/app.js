import React, { useState } from "react";
import Header from "./components/header";
import SearchBar from "./components/search_bar";
import Breweries from "./components/Breweries";

const App = () => {
  const [breweries, setBreweries] = useState();

  async function fetchBreweries(city) {
    const CLIENT_ID = "2V03IPZCGBAOXVGP2IK5SV3QLHOUNKBXJTNKVBHEXXLQI4QT";
    const CLIENT_SECRET = "4RLMJD1GPZEBFX2OIOOLLSQO1N1SB1YZC5I150MAK4A2XYF2";
    const URL = `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&near=${city}&query=brewery&v=20171130`;
    const res = await fetch(URL);
    const json = await res.json();

    const { venues } = json.response;

    setBreweries(venues);

    // setBreweries(json.response.venues).catch((error) =>
    //   console.log("Please enter a valid city.")
    // );
  }

  return (
    <main>
      <Header />
      <div className="container">
        <SearchBar fetchBreweries={fetchBreweries} />
        <Breweries breweries={breweries} />
      </div>
    </main>
  );
};

export default App;
