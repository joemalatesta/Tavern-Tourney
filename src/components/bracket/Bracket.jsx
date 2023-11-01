import { useState } from "react";
import SingleMatch from './SingleMatch'

const Bracket = ({ playerObj }) => {
  const [round, setRound] = useState([[null,null],[null,null]])

  const handleRoundPlayers = async (player) => {
    console.log(player);
    console.log('round', round);
    let playerIdx = await getIndex(player)
    console.log(playerIdx);
    if (playerIdx === 0 || playerIdx === 1 || playerIdx === 2 || playerIdx === 3){
      if(round[0].includes(null)) {
        setRound([...round, [round[0].shift()]])
      }
      setRound([...round, [round[0].push(player)]])
      console.log('yes');
    }
    // if (playerIdx === 4 || playerIdx === 5 || playerIdx === 6 || playerIdx === 7) {
    //   setRound([...round, [round[1].push(player)]])
    // }
    
    console.log('No')
    console.log(round);

  }
  const getIndex = (player) => {
    console.log(playerObj.indexOf(player))
    return playerObj.indexOf(player)
  }

  return (
    <>
      {playerObj.map(player=> (
        <SingleMatch 
          getIndex={getIndex} 
          player={player} 
          key={player._id}
          handleRoundPlayers={handleRoundPlayers}  
        />
      ))}
    </>
  )
}

export default Bracket;
