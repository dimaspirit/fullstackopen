import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

import CountryInfo from './components/CountryInfo';
import CountriesList from './components/CountriesList';

function App() {
  const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api';

  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);

  const isQueryUse = query.trim() !== '';

  const countriesFiltered = countries.filter(country => {
    const commonName = country.name.common.toLowerCase();
    const officialName = country.name.official.toLowerCase();
    const queryFormatted = query.toLowerCase();

    return commonName.includes(queryFormatted) || officialName.includes(queryFormatted);
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/all`)
      .then((response) => {
        setCountries(response.data);
      }).catch((error) => {
        console.log('Get all error', error);
      });
  }, []);

  return (
    <>
      <h1>Countries</h1>
      <div className="section">
        Find countries: <input type="text" value={query} onChange={(e) => setQuery(e.target.value.trim())} />
      </div>

      <div className="section">
        {countriesFiltered.length === 1 && <CountryInfo country={countriesFiltered[0]} />}
        
        {countriesFiltered.length > 1 && countriesFiltered.length < 10 && <CountriesList countries={countriesFiltered} />}

        {isQueryUse && countriesFiltered.length > 10 && <h4>Too many matches, specify more</h4>}
      </div>
    </>
  )
}

export default App
