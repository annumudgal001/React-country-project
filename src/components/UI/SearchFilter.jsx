import React from 'react';

export const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSelectChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <section className="section-searchFilter">
            <input
                type="text"
                placeholder="Search for a country..."
                value={search}
                onChange={handleInputChange}
            />
            <div className="select-section">
                <select value={filter} onChange={handleSelectChange}>
                    <option value="all">All</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="Americas">Americas</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    );
};