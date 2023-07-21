import React, { useState } from "react";
import socket from "../socketConfig";

const JoinGame = (props) => {
  const [userInput, setuserInput] = useState({ gameID: "", nickName: "" });

  const onChange = (e) => {
    setuserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    socket.emit("join-game", userInput);
  };

  return (
    <div className="grid justify-center items-center gap-5 p-10 rounded-lg shadow-2xl dark:shadow-white">
      <h1 className="text-blue-800 text-4xl my-5 dark:text-blue-200">Join Game</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label
            htmlFor="gameID"
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
          >
            Enter Game ID
          </label>
          <input
            type="text"
            name="gameID"
            value={userInput.gameID}
            onChange={onChange}
            placeholder="Enter Game ID"
            className="shadow appearance-none border rounded w-full mt-2 mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label
            htmlFor="nickName"
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
          >
            Enter Nick Name
          </label>
          <input
            type="text"
            name="nickName"
            value={userInput.nickName}
            onChange={onChange}
            placeholder="Enter Nick Name"
            className="shadow appearance-none border rounded w-full mt-2 mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-900 hover:bg-blue-600 hover:cursor-pointer rounded-md text-white p-2 my-5 shadow-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JoinGame;
