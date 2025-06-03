import React, { useEffect, useState, useTransition } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountryIndData } from '../../API/postAPI.jsx';
import { Loader } from '../UI/loader.jsx';

const CountryDetails = () => {
    const { id } = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getCountryIndData(id);
                startTransition(() => {
                    console.log(res.data);
                    setCountry(res.data);
                    if (res.status === 200) {
                        setCountry(res.data[0]);
                    }
                });
            } catch (error) {
                startTransition(() => {
                    setError('Failed to fetch country data: ' + error.message);
                });
            }
        };
        fetchData();
    }, [id]);

    console.log(id);

    if (isPending) {
        return (
            <div className="loader-section">
                <Loader />
            </div>
        );
    }

    if (error || !country) {
        return (
            <div className="error-container">
                <div className="error-content">
                    <h1>{error ? 'Error' : 'Country Not Found'}</h1>
                    <p>{error || `No details available for ${id}.`}</p>
                    <Link to="/country" className="home-link">
                        Back to Countries
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <section className="country-section">
            {country && (
                <div className="container">
                    <div className="container-card grid grid-two-cols">
                        <div className="hero-image">
                            <img
                                src={country.flags?.svg}
                                alt={country.flags?.alt || `${country.name?.common} flag`}
                                className="banner-image"
                            />
                        </div>
                        <div className="infoContainer">
                            <h2 className="card-title">{country.name?.common || 'N/A'}</h2>
                            <p className="card-description">
                                <strong>Official Name:</strong> {country.name?.official || 'N/A'}
                            </p>
                            <p className="card-description">
                                <strong>Population:</strong> {country.population?.toLocaleString() || 'N/A'}
                            </p>
                            <p className="card-description">
                                <strong>Region:</strong> {country.region || 'N/A'}
                            </p>
                            <p className="card-description">
                                <strong>Subregion:</strong> {country.subregion || 'N/A'}
                            </p>
                            <p className="card-description">
                                <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
                            </p>
                            <p className="card-description">
                                <strong>Currencies:</strong>{' '}
                                {Object.values(country.currencies || {})
                                    .map((c) => `${c.name} (${c.symbol})`)
                                    .join(', ') || 'N/A'}
                            </p>
                            <p className="card-description">
                                <strong>Languages:</strong>{' '}
                                {Object.values(country.languages || {}).join(', ') || 'N/A'}
                            </p>
                            <p className="card-description">
                                <strong>Borders:</strong> {country.borders?.join(', ') || 'None'}
                            </p>
                            <p className="card-description">
                                <strong>Top-Level Domain:</strong> {country.tld?.join(', ') || 'N/A'}
                            </p>
                            <p className="card-description">
                                <strong>Area:</strong> {country.area?.toLocaleString() + ' km²' || 'N/A'}
                            </p>
                            <p className="card-description">
                                <strong>Timezones:</strong> {country.timezones?.join(', ') || 'N/A'}
                            </p>
                            <p className="card-description">
                                <strong>Continents:</strong> {country.continents?.join(', ') || 'N/A'}
                            </p>
                            <p className="card-description">
                                <strong>Start of Week:</strong> {country.startOfWeek || 'N/A'}
                            </p>
                            <p className="card-description">
                                <strong>Driving Side:</strong> {country.car?.side || 'N/A'}
                            </p>
                            <div className="country-card-backBtn">
                                <Link to="/country" className="home-link">
                                    Back to Countries
                                </Link>
                                <Link to="/" className="home-link" style={{ marginLeft: '1rem' }}>
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CountryDetails;