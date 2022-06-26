import { useParams } from 'react-router-dom';

export function CountryDetails(countries) {
  const { id } = useParams();

  return (
    <div className="col-7">
      {countries.countries
        .filter((countries) => {
          return countries.alpha3Code.includes(id);
        })
        .map((currentCountry) => {
          return (
            <div key={id}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${currentCountry.alpha2Code.toLowerCase()}.png`}
                alt={currentCountry.name.official}
              />

              <h1>{currentCountry.name.official}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{ width: '30%' }}>Capital</td>
                    <td>{currentCountry.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {currentCountry.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul style={{ listStyleType: 'none' }}>
                        {currentCountry.borders.map((currentBorder) => {
                          return (
                            <li>
                              <a href={`/${currentBorder}`}>{currentBorder}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
}
