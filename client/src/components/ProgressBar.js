import React from "react";

const calculatePercentage = (player, wordsLength) => {
  if (player.currentWordIndex !== 0) {
    return ((player.currentWordIndex / wordsLength) * 100).toFixed(2);
  }
  return 0;
};

const getColorByPercentage = (percentage) => {
  if (percentage >= 75) {
    return "bg-green-500"; // Green color for 75% and above
  } else if (percentage >= 50) {
    return "bg-yellow-400";}
  else if (percentage >= 25) {
      return "bg-blue-400"; // Yellow color for 50% and above
  } else {
    return "bg-red-400"; // Red color for below 50%
  }
};

const ProgressBar = ({ player, players, wordsLength }) => {
  const percentage = calculatePercentage(player, wordsLength);
  const colorClass = getColorByPercentage(percentage);

  return (
    <div>
      <h1 className="text-lg font-bold mt-10 mb-5 dark:text-white">
        {player.nickName}
      </h1>
      <div className="w-full bg-gray-200 rounded-full" key={player._id}>
        <div
          className={`text-xs font-medium text-white text-center p-0.5 leading-none rounded-full ${colorClass}`}
          role="progressbar"
          style={{ width: `${percentage}%` }}
        >
          {`${percentage}%`}
        </div>
      </div>

      {players.map((playerObj) => {
        const percentage = calculatePercentage(playerObj, wordsLength);
        const colorClass = getColorByPercentage(percentage);

        return playerObj._id !== player._id ? (
          <div key={playerObj._id}>
            <h1 className="text-lg font-bold mt-10 mb-5 dark:text-white">{playerObj.nickName}</h1>
            <div className="w-full bg-gray-200 rounded-full">
              <div
                className={`text-xs font-medium text-black text-center p-0.5 leading-none rounded-full ${colorClass}`}
                role="progressbar"
                style={{ width: `${percentage}%` }}
              >
                {`${percentage}%`}
              </div>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default ProgressBar;
