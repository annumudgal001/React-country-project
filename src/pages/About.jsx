import React from 'react';
import countryFacts from '../API/CountryData.json';

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are interesting Facts we're proud of
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((curelem) => {
          const { id, countryName, capital, population, interestingFact } = curelem;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p className="card-description">
                  <strong>Capital:</strong> {capital}
                </p>
                <p className="card-description">
                  <strong>Population:</strong> {population.toLocaleString()}
                </p>
                <p className="card-description">
                  <strong>Interesting Fact:</strong> {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};