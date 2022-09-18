import { Link } from 'react-router-dom';

export function CountriesList({ countries }) {
  return (
    <div
      className="col-5"
      style={{ maxHeight: '90vh', overflow: 'scroll', textAlign: 'center' }}
    >
      {countries
        .map((currentCountry) => {
          return (
            <div className="list-group" key={currentCountry.alpha2Code}>
              <Link
                className="list-group-item list-group-item-action"
                to={`/${currentCountry.alpha3Code}`}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${currentCountry.alpha2Code.toLowerCase()}.png`}
                  alt={currentCountry.name.official}
                  style={{ width: '50px' }}
                />
                <p>{currentCountry.name.common}</p>
              </Link>
            </div>
          );
        })
        .sort((a, b) => a.key.localeCompare(b.key))}
    </div>
  );
}
