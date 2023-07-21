import React, { useState } from 'react';
import socket from '../socketConfig';

const Compete = (props) => {
  const [userInput, setUserInput] = useState({ difficulty: 'easy', nickName: '' });

  const onChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    socket.emit('join-competition', userInput);
  };

  return (
  
      <div className="grid justify-center items-center gap-5 p-10 rounded-lg shadow-2xl">
        <h1 className="text-blue-800 text-4xl my-5">Enter Competition</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="difficulty" className="block text-gray-700 text-sm font-bold mb-2">Select Difficulty</label>
            <select
              name="difficulty"
              value={userInput.difficulty}
              onChange={onChange}
              className="form-control shadow appearance-none border rounded w-full mt-2 mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <label htmlFor="nickName" className="block text-gray-700 text-sm font-bold mb-2">Enter Nick Name</label>
            <input
              type="text"
              name="nickName"
              value={userInput.nickName}
              onChange={onChange}
              placeholder="Enter Nick Name"
              className="form-control shadow appearance-none border rounded w-full mt-2 mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button type="submit" className="bg-blue-900 hover:bg-blue-600 hover:cursor-pointer rounded-md text-white p-2 my-5 shadow-lg">
            Submit
          </button>
        </form>
      </div>
  );
};

export default Compete;