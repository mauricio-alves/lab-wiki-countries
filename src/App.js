import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';
import { Navbar } from './components/Navbar';
import axios from 'axios';

// import countries from './countries.json';

export function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchList() {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setLoading(false);
      setCountries(response.data);
    }
    fetchList();
  }, []);

  return loading ? (
    <div className="spinner-border text-danger" role="status"></div>
  ) : (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
