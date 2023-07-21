import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="bg-blue-900 p-5 text-white">
            <nav className="bg-white/10 flex flex-row items-center justify-between p-2">
            <Link className=" active:text-white hover:text-white hover:no-underline" to="/"><h1 className="text-2xl font-bold">Typing App</h1></Link>
                <ul className="hidden md:flex gap-8 uppercase">
                    <li>
                        <Link className=" active:text-white hover:text-white hover:no-underline" to="/game/create">Solo</Link>
                    </li>
                    <li>
                        <Link className=" active:text-white hover:text-white hover:no-underline" to="/game/join">Join Game</Link>
                    </li>
                    <li>
                        <Link className=" active:text-white hover:text-white hover:no-underline" to="/game/compete">Multiplayer</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
