import { useState } from "react";
import SingleMatch from './SingleMatch'

const Bracket = ({ playerObj }) => {
  const [round, setRound] = useState([[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]])
      
  
  const handleRoundPlayers = (player) => {
    const playerIdx = getIndex(player);

    if (playerIdx === 0 || playerIdx === 1 || playerIdx === 2 || playerIdx === 3) {
      if (round[0].includes(null)) {
        const updatedRound = [...round];
        const nullIndex = updatedRound[0].indexOf(null);
        updatedRound[0][nullIndex] = player;
        setRound(updatedRound);
      } 
    } 
    if (playerIdx === 4 || playerIdx === 5 || playerIdx === 6 || playerIdx === 7) {
      if (round[1].includes(null)) {
        const updatedRound = [...round];
        const nullIndex = updatedRound[1].indexOf(null);
        updatedRound[1][nullIndex] = player;
        setRound(updatedRound);
      } 
    }
    if (playerIdx === 8 || playerIdx === 9 || playerIdx === 10 || playerIdx === 11) {
      if (round[2].includes(null)) {
        const updatedRound = [...round];
        const nullIndex = updatedRound[2].indexOf(null);
        updatedRound[2][nullIndex] = player;
        setRound(updatedRound);
      } 
    } 
    if (playerIdx === 12 || playerIdx === 13 || playerIdx === 14 || playerIdx === 15) {
      if (round[3].includes(null)) {
        const updatedRound = [...round];
        const nullIndex = updatedRound[3].indexOf(null);
        updatedRound[3][nullIndex] = player;
        setRound(updatedRound);
      } 
    }
    if (playerIdx === 16 || playerIdx === 17 || playerIdx === 18 || playerIdx === 19) {
      if (round[4].includes(null)) {
        const updatedRound = [...round];
        const nullIndex = updatedRound[4].indexOf(null);
        updatedRound[4][nullIndex] = player;
        setRound(updatedRound);
      } 
    } 
    if (playerIdx === 20 || playerIdx === 21 || playerIdx === 22 || playerIdx === 23) {
      if (round[5].includes(null)) {
        const updatedRound = [...round];
        const nullIndex = updatedRound[5].indexOf(null);
        updatedRound[5][nullIndex] = player;
        setRound(updatedRound);
      } 
    }
    if (playerIdx === 24 || playerIdx === 25 || playerIdx === 26 || playerIdx === 27) {
      if (round[6].includes(null)) {
        const updatedRound = [...round];
        const nullIndex = updatedRound[6].indexOf(null);
        updatedRound[6][nullIndex] = player;
        setRound(updatedRound);
      } 
    } 
    if (playerIdx === 28 || playerIdx === 29 || playerIdx === 30 || playerIdx === 31) {
      if (round[7].includes(null)) {
        const updatedRound = [...round];
        const nullIndex = updatedRound[7].indexOf(null);
        updatedRound[7][nullIndex] = player;
        setRound(updatedRound);
      } 
    }
    console.log(round);
  };

  const getIndex = (player) => {
    return playerObj.indexOf(player);
  };

  return (
    <>
      {playerObj.map((player) => (
        <SingleMatch
          getIndex={getIndex}
          player={player}
          key={player._id}
          handleRoundPlayers={handleRoundPlayers}
        />
      ))}
      {/* Display rounds */}
      {round?.map((match, index) => (
        <div key={index}>
          {match.map((player, idx) => (
            <div key={idx}>{ player ? player.name : null }</div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Bracket;