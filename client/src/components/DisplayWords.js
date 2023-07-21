import React, {useState,useEffect} from 'react';
import socket from '../socketConfig';
const getTypedWords = (words, player) => {
    let typedWords = words.slice(0, player.currentWordIndex);
    typedWords = typedWords.join(" ");
    return <span className="p-2 rounded-md shadow-md bg-green-200">{typedWords} </span>;
};
const getCurrentWord = (words, player, wrong) => {
    const currentWord = words[player.currentWordIndex];
    const classNames = `p-2 rounded-md shadow-md ${wrong ? 'bg-red-200' : 'underline'}`;
    return <span className={classNames}>{currentWord}</span>;
  };

const getWordsToBeTyped = (words, player) => {
    let wordsToBeTyped = words.slice(player.currentWordIndex + 1, words.length);
    wordsToBeTyped = wordsToBeTyped.join(" ");
    return <span className="p-2 rounded-md shadow-md" > {wordsToBeTyped}</span>;
};

const DisplayWords = ({ words, player }) => {
    const [wrong,setWrong]=useState(false);
    useEffect(() => {
      const handleWrongWord = () => {
        setWrong(true);
        setTimeout(() => {
          setWrong(false);
        }, 1000);
      };
  
      socket.on('wrongWord', handleWrongWord);
  
      return () => {
        socket.off('wrongWord', handleWrongWord);
      };
    }, [socket]);
  
    return (
        <div className="flex flex-row">
            {getTypedWords(words, player)}
            {getCurrentWord(words, player, wrong)}
            {getWordsToBeTyped(words, player)}
        </div>
    );
};

export default DisplayWords;
