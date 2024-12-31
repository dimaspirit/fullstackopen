const CountryInfo = ({country}) => {
  return (
    <>
      <h2>{country.name.official}</h2>
      <div className="section">
        <p>Capital: {country.capital.join(',')}</p>
        <p>Area: {country.area}</p>
      </div>

      <div className="section">
        <h4>Languages:</h4>
        <ul>
          {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
        </ul>
      </div>

      <div className="section">
        <img src={country.flags.png} alt="Flag" />
      </div>
    </>
  )
}

export default CountryInfo;