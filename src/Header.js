import React, { useContext } from 'react';
import ThemeContext from './contexts/ThemeContext';

function Header() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <header>
            {/* ... other header elements ... */}
            <button onClick={toggleTheme}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </header>
    );
}
export default Header