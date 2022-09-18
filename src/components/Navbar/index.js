import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LAB - WikiCountries
        </Link>
      </div>
    </div>
  );
}
