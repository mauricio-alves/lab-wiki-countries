import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export function CountryDetails() {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountry() {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
      );
      setLoading(false);
      setCountry(response.data);
    }
    fetchCountry();
  }, [alpha3Code]);

  return loading ? (
    <div className="spinner-border text-danger" role="status"></div>
  ) : (
    <>
      <div
        className="col-7"
        style={{ textAlign: 'center' }}
        key={country.alpha2Code}
      >
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt={country.name.official}
          style={{ width: '150px' }}
        />
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.length
                    ? country.borders.map((currentCountry) => {
                        return (
                          <li
                            key={currentCountry}
                            style={{ listStyle: 'none' }}
                          >
                            <Link to={`/${currentCountry}`}>
                              {currentCountry}
                            </Link>
                          </li>
                        );
                      })
                    : 'This country does not share any borders.'}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
