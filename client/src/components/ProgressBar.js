import React from "react";

const calculatePercentage = (player, wordsLength) => {
  if (player.currentWordIndex !== 0) {
    return ((player.currentWordIndex / wordsLength) * 100).toFixed(2) + "%";
  }
  return 0;
};

const ProgressBar = ({ player, players, wordsLength }) => {
  const percentage = calculatePercentage(player, wordsLength);
  return (
    <div>
      {
        <>
          <h1 className="text-lg font-bold mt-10 mb-5">{player.nickName}</h1>
          <div className="w-full bg-gray-200 rounded-full" key={player._id}>
            <div
              className="bg-blue-600 text-xs font-medium text-black text-center p-0.5 leading-none rounded-full"
              role="progressbar"
              style={{ width: percentage }}
            >
              {percentage}
            </div>
          </div>
        </>
      }
      {players.map((playerObj) => {
        const percentage = calculatePercentage(playerObj, wordsLength);
        return playerObj._id !== player._id ? (
          <>
            <h1 className="text-lg font-bold mt-10 mb-5">{playerObj.nickName}</h1>
            <div
              className="w-full bg-gray-200 rounded-full"
              key={playerObj._id}
            >
              <div
                className="bg-blue-600 text-xs font-medium text-black text-center p-0.5 leading-none rounded-full"
                role="progressbar"
                style={{ width: percentage }}
              >
                {percentage}
              </div>
            </div>
          </>
        ) : null;
      })}
    </div>
  );
};

export default ProgressBar;
