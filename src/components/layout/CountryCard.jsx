import React from 'react';
import { NavLink } from 'react-router-dom';

export const CountryCard = ({ country }) => {
    return (
        <li className="card">
            <div className="container-card bg-blue-box">
                <img src={country.flags.svg} alt={`${country.flags.alt} flag`} />
                <p className="card-title">{country.name.common}</p>
                <p>
                    <span className="card-description">Population:</span> {country.population.toLocaleString()}
                </p>
                <p>
                    <span className="card-description">Region:</span> {country.region}
                </p>
                <p>
                    <span className="card-description">Capital:</span> {country.capital[0] || 'N/A'}
                </p>
                <NavLink to={`/country/${country.name.common}`}>
                    <button>Read More</button>
                </NavLink>
            </div>
        </li>
    );
};