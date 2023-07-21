import React, { useState, useRef, useEffect } from "react";
import socket from "../socketConfig";
import { useNavigate } from 'react-router-dom';

const Form = ({ isOpen, isOver, gameID }) => {
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState("");
    const [isDisabled, setIsDisabled] = useState(false); // Track if the form is disabled
    const textInput = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            textInput.current.focus();
        }
    }, [isOpen]);

    const resetForm = () => {
        setUserInput("");
    };
    const onChange = (e) => {
        let value = e.target.value;
        let lastChar = value.charAt(value.length - 1);
        if (lastChar === " ") {
            socket.emit("userInput", { userInput, gameID });
            resetForm();
        } else setUserInput(e.target.value);
    };
    
    const handleQuitGame = () => {
        // Disable the form when the user quits the game
        setIsDisabled(true); 
        socket.emit("quitGame", { gameID });
    };
    return (
        <>
            <form className="my-5">
                <input
                    type="text"
                    readOnly={isOpen || isOver || isDisabled} // Disable the input when the form is disabled
                    onChange={onChange}
                    value={userInput}
                    className={`shadow appearance-none border rounded w-1/2 my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isDisabled ? "bg-gray-300" : ""}`} // Add a different background color to indicate it's disabled
                    ref={textInput}
                />
            </form>
            {!isOpen && !isOver && (
                <button onClick={handleQuitGame} className="bg-red-500 text-white px-4 py-2 rounded-md mt-2">
                    Quit
                </button>
            )}
        </>
    );
};

export default Form;
