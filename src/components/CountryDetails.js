import './../css/CountryDetails.css';
import React, { useContext } from 'react';
import { Header } from './Header';
import { useNavigate, useParams } from 'react-router-dom';
import countriesData from './../data.json';
import { navigateToDetailsPage } from '../lib/navigateToDetailsPage';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { ThemeContext } from '../context/ThemeProvider';

export const CountryDetails = () => {

    const params = useParams();
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const countryName = params.name.toLowerCase();
    //const [country,setCountry] = useState();
    const country = countriesData.filter(country => country.name.toLowerCase() === countryName)[0];


    /* useEffect(() => {
        setCountry(countriesData.filter(country => country.name.toLowerCase() === countryName)[0])
    },[]) */


    return (
        <div className='wrapper'>
            <Header />

            <section className={`"country-full-details" ${theme === 'dark' ? 'dark-background' : 'light-background'}`}>

                <button className="back-button" onClick={() => navigate(-1)}>
                    <KeyboardBackspaceIcon />
                    Back
                </button>

                <article className="country-details-wrapper">

                    <div className="country-flag-container">
                        <img src={country.flags.png} alt="" />
                    </div>

                    <div className="country-details-outline-container">

                        <p className="country-details-outline-container__name">
                            {country.name}
                        </p>

                        <div className="country-facts">

                            <div className="location-facts">
                                <ul>
                                    <li><span>Native Name: </span>{country.nativeName}</li>
                                    <li><span>Population: </span>{country.population}</li>
                                    <li><span>Region: </span>{country.region}</li>
                                    <li><span>Sub Region: </span>{country.subregion}</li>
                                    <li><span>Capital: </span>{country.capital}</li>
                                </ul>
                            </div>

                            <div className="other-facts">
                                <ul>
                                    <li><span>Top Level Domain: </span>{country.topLevelDomain}</li>
                                    <li><span>Currencies: </span>{country.currencies.map(currency => currency.name)}</li>
                                    <li><span>Language: </span>{country.languages.map(lang => lang.name)}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-countries-container">
                            <p>Border Countries: </p>

                            <div className="borders-container">
                                {
                                    country.borders &&
                                    country.borders.map(border => {
                                        const country = countriesData.filter(country => country.alpha3Code === border)[0];
                                        return (
                                            <button key={country.name} onClick={() => navigateToDetailsPage(country.name, navigate)}>{country.name}</button>
                                        )
                                    })
                                }
                            </div>

                        </div>

                    </div>
                </article>
            </section>
        </div>
    )
}
