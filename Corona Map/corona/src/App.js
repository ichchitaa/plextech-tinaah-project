
import './App.css';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import axios from 'axios';
import { useState } from 'react';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const location = [38.9072, -77.0369];
const zoom = 12;
let state = {};
axios.get("https://disease.sh/v3/covid-19/countries?query&=yesterday").then(res => {
  console.log(res.data);
  state = res.data;
});
function App() {
  return (
    <div className="App">
      <MapContainer center ={[0,0] } zoom={4}>
        <TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
        {state.map( (country, i) => {
          let lat = country.countryInfo.lat;
          let long = country.countryInfo.long;
          return (
          <Marker key={i} position={[lat, long]}>
          <Popup>
            {country.country} <br/> Cases: {country.cases} <br/> Deaths: {country.deaths}
          </Popup>
        </Marker>
        )})}
      </MapContainer>
    </div>
  );
}

export default App;
