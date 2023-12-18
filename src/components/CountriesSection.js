import React, { useContext, useRef, useState } from 'react';
import './../css/CountriesSection.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { filterCountriesByRegion } from '../lib/filterCountriesByRegion';
import { filterCountriesByName } from '../lib/filterCountriesByName';
import countriesData from './../data.json';
import { useNavigate } from 'react-router-dom';
import { navigateToDetailsPage } from '../lib/navigateToDetailsPage';
import { ThemeContext } from '../context/ThemeProvider';

export const CountriesSection = () => {

    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const [countries, setCountries] = useState(countriesData);
    const searchInput = useRef()




    return (
        <main className={`${theme === 'dark' && 'dark-mode'}`}>


            <section className="search-filter-section">

                <div className="search-container">
                    <SearchOutlinedIcon />
                    <input
                        type="text"
                        ref={searchInput}
                        onChange={e => filterCountriesByName(searchInput, setCountries)}
                        placeholder='Search for countries'
                    />
                </div>


                <select className='region-select' name="regions" id="regions" onChange={e => filterCountriesByRegion(e, setCountries)}>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>


            </section>


            <section className="countries-section">

                {
                    countries.map(country => {

                        return (
                            <article key={country.name} className="country" onClick={() => navigateToDetailsPage(country.name, navigate)}>
                                <div className="flag-container">
                                    <img src={country.flags.png} alt={`Flag of ${country.name}`} />
                                </div>

                                <div className="country__details">

                                    <p className="country__details__name">
                                        {country.name}
                                    </p>

                                    <ul>
                                        <li><span>Population</span>: {country.population}</li>
                                        <li><span>Region</span>: {country.region}</li>
                                        <li><span>Capital</span>: {country.capital}</li>
                                    </ul>
                                </div>
                            </article>
                        )
                    })
                }

            </section>


        </main>
    )
}
