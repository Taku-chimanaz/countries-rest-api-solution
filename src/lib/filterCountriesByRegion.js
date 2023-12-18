import countriesData from './../data.json';

export const filterCountriesByRegion = (e, setCountries) => {
    const region = e.target.value.toLowerCase();
    console.log(region)
    if (region === 'all') {
        setCountries(countriesData);
        return
    }

    const filteredCountries = countriesData.filter(country => country.region.toLowerCase() === region);
    setCountries(filteredCountries);
}