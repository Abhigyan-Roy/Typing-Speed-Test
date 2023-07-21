import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const [active, setActive] = useState(false)
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const themeIcon = theme === "dark" ? faSun : faMoon;
    return (
        <header className="bg-blue-900 p-5 text-white dark:bg-gray-600">
            <nav className="bg-white/10 flex flex-row items-center justify-between p-2">
                <Link className=" active:text-white hover:text-white hover:no-underline" to="/"><h1 className="text-2xl font-bold">Typing App</h1></Link>
                <button onClick={handleThemeSwitch}>
                    <FontAwesomeIcon icon={themeIcon} />
                </button>
            </nav>
        </header>
    );
};

export default Header;
