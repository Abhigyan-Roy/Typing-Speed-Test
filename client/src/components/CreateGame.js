import React, { useState } from 'react';
import socket from '../socketConfig';

const CreateGame = props => {
    const [nickName, setNickName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const onChange = e => {
        setNickName(e.target.value);
    }
    const onChangeDifficulty = e => {
        setDifficulty(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        socket.emit('create-game', { nickName, difficulty });
    }

    return (
        <div className="row">
            <div className="col-sm"></div>
            <div className="col-sm-8">
                <h1 className="text-center">Create Game</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="nickName">Enter Nick Name</label>
                        <input type="text" name="nickName"
                            value={nickName}
                            onChange={onChange}
                            placeholder="Enter Nick Name"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="difficulty">Select Difficulty</label>
                        <select
                            name="difficulty"
                            value={difficulty}
                            onChange={onChangeDifficulty}
                            className="form-control"
                        >
                            <option value="">Select Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <button style={{ cursor: 'pointer' }} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-sm"></div>
        </div>
    )
}

export default CreateGame;