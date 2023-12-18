import countriesData from './../data.json';

export const filterCountriesByName = (searchInput, setCountries) => {

    const searchInputValue = searchInput.current.value.toLowerCase();
    const matchingCountries = countriesData.filter(country => country.name.toLowerCase().includes(searchInputValue));
    setCountries(matchingCountries);
}