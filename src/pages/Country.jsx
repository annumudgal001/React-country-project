import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../API/postAPI.jsx';
import { Loader } from '../components/UI/loader.jsx';
import { CountryCard } from '../components/layout/CountryCard.jsx';
import { SearchFilter } from '../components/UI/SearchFilter.jsx';

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryData();
        startTransition(() => {
          setCountries(res.data);
        });
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };
    fetchData();
  }, []);

  if (isPending) {
    return (
      <div className="loader-section">
        <Loader />
      </div>
    );
  }

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  const filterRegion = (country) => {
    if (filter === 'all') {
      return true;
    }
    return country.region.toLowerCase() === filter.toLowerCase();
  };

  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filteredCountries.map((country) => (
          <CountryCard country={country} key={country.name.common} />
        ))}
      </ul>
    </section>
  );
};