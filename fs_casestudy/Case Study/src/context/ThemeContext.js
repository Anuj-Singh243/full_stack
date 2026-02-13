import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // 'light' or 'dark'
    const [accentColor, setAccentColor] = useState('#007bff'); // Default Bootstrap primary color

    useEffect(() => {
        // Apply theme class to body
        document.body.className = `${theme}-theme`;
        // You can also set a CSS variable here for accent color if needed globally
        document.documentElement.style.setProperty('--primary-color', accentColor);
    }, [theme, accentColor]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, accentColor, toggleTheme, setAccentColor }}>
            {children}
        </ThemeContext.Provider>
    );
};
