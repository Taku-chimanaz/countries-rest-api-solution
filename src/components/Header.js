import { useContext } from 'react';
import './../css/Header.css';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { ThemeContext } from '../context/ThemeProvider';

export const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (

        <header className={`${theme === 'dark' && 'dark-header'}`}>

            <p className="where-in-the-world-txt">
                Where in the world?
            </p>

            <div className="mode-container">
                <DarkModeOutlinedIcon onClick={() => toggleTheme(theme)} />
                <p className="mode-state">
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </p>
            </div>
        </header>
    )
}
