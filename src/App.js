import './App.css';
import axios from 'axios';
import { Search } from './components/search';

const mapBoxToken = `pk.eyJ1IjoicHVyZXZzdXJlbjA0IiwiYSI6ImNsMHN6ZmU5bzAxazAzYnBlbTNsODl2N2YifQ.w26x8IIYootMucbrnItv0g`;
function App() {

  const getMapBox = async (searchText) => {
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${mapBoxToken}`);
    console.log(response);
  }

  return (
    <div className="App flex just-center">
      <Search getMapBox = {getMapBox}></Search>
    </div>
  );
}

export default App;
