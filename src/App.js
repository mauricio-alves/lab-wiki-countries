import { useState } from 'react';
import './App.css';
import countriesList from './countries.json';
import { CountryDetails } from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';

export function App() {
  const [countries, setCountries] = useState(countriesList);

  return (
    <div className="App">
      <Navbar />
      <div className="display">
        <CountriesList countries={countries} setCountries={setCountries} />
        <Routes>
          <Route
            path="/:id"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </div>
    </div>
  );
}
