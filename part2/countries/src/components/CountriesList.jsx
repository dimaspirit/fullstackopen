const CountriesList = ({countries}) => {
  return countries.map((country) => <p key={`${country.cioc}${country.area}`}>{country.name.common}</p>)
}

export default CountriesList;