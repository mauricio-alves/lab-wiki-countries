import { Link } from 'react-router-dom';

export function CountriesList(countries) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ overflow: 'scroll', maxHeight: '90vh' }}
        >
          <div className="list-group">
            {countries.countries.map((currentFlag, id) => {
              return (
                <Link
                  key={id}
                  className="list-group-item list-group-item-action"
                  to={`/${currentFlag.alpha3Code}`}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${currentFlag.alpha2Code.toLowerCase()}.png`}
                    alt={currentFlag.name.official}
                  />
                  <p>{currentFlag.name.official}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
