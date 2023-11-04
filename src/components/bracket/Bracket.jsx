import { useState } from "react";
import SingleMatch from './SingleMatch'
import * as gameService from '../../services/gameServices'

const Bracket = ({ playerObj, user }) => {
  const [round, setRound] = useState([[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]])
  const [matches, setMatches] = useState(gameService.SplitIntoTuples(playerObj))

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
  }

  const getIndex = (player) => {
    return playerObj.indexOf(player);
  }



  return (
    <>
      {matches?.map((match, idx) => (
        <SingleMatch
          user={user}
          match={match}
          playerObj={playerObj}
          key={idx}
          handleRoundPlayers={handleRoundPlayers}
        />
      ))}

    </>
  );
};

export default Bracket;