import { useState } from "react";
import SingleMatch from './SingleMatch'

const Bracket = ({ playerObj }) => {
  const [round, setRound] = useState([[null, null], [null, null]]);

  const handleRoundPlayers = (player) => {
    const playerIdx = getIndex(player);

    if (playerIdx === 0 || playerIdx === 1 || playerIdx === 2 || playerIdx === 3) {
      if (round[0].includes(null)) {
        const updatedRound = [...round];
        const nullIndex = updatedRound[0].indexOf(null);
        updatedRound[0][nullIndex] = player;
        setRound(updatedRound);
      } else {
        if (round[1].includes(null)) {
          const updatedRound = [...round];
          const nullIndex = updatedRound[1].indexOf(null);
          updatedRound[1][nullIndex] = player;
          setRound(updatedRound);
        } else {
          console.log("Both rounds are complete, cannot add more players.");
        }
      }
    } else {
      console.log("Player index is out of range.");
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
      {round.map((match, index) => (
        <div key={index}>
          {match.map((player, idx) => (
            <div key={idx}>{player ? player.name : "Waiting..."}</div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Bracket;