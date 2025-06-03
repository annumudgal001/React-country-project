import axios from 'axios';

const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
});

export const getCountryData = async () => {
    try {
        return await api.get('/all?fields=name,population,region,capital,flags');
    } catch (error) {
        throw new Error('Failed to fetch country data: ' + error.message);
    }
};


export const getCountryIndData = async (name) => {
    try {
        return await api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
    } catch (error) {
        throw new Error('Failed to fetch country data: ' + error.message);
    }
};