import { useState, useEffect } from "react";
import SingleMatch from './SingleMatch';
import * as gameService from '../../services/gameServices';

const Bracket = ({ playerObj, user, matches, round, setRound}) => {
  const getIndex = (searchedPlayer) => {
    return playerObj.findIndex((player) => searchedPlayer._id === player._id);
  };



  const [roundFlattened, setRoundFlattened] = useState(round.flat());

  useEffect(() => {
    setRoundFlattened(round.flat())
    let round2Games = gameService.SplitIntoTuples(round)
    console.log(round2Games);
  }, [round]);

  
  const handleRoundPlayers = (player) => {
    const playerIdx = getIndex(player);
    const updatedRound = [...round];

    if (playerIdx >= 0) {
      const roundIndex = Math.floor(playerIdx / 4);
      const subRound = updatedRound[roundIndex];

      if (subRound.includes(null)) {
        const nullIndex = subRound.indexOf(null);
        subRound[nullIndex] = player;
        updatedRound[roundIndex] = subRound;
        setRound(updatedRound);
      }
    }
  };

  console.log(roundFlattened);

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