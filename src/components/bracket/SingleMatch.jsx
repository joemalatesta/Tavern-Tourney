import { useState, useEffect } from "react";
import { getGameRace } from '../../services/gameServices';
import SingleMatchPlayerLine from "./SingleMatchPlayerLine";

const SingleMatch = (props) => {
  const [hiddenWinnerButton, setHiddenWinnerButton] = useState(false);
  let sortedPlayers
  
  if(props?.match?.length === 2 ){
    sortedPlayers = [...props.match].sort((a, b) => b.rank - a.rank);
  }
  const [player, setPlayer] = useState(sortedPlayers?.map(player => ({
    ...player,
    gamesNeededToWin: ''
  })))
  
  useEffect(() => {
    getFirstPlayer(props.match)
  }, [props.match]);

  function getFirstPlayer(game) {
    let sortedGame
    if(game.name === 'Bye')return
    if(game?.length === 2 ){
      sortedGame = [...game].sort((a, b) => a.rank - b.rank);
      let races = getGameRace(sortedGame[0], sortedGame[1]);
      setPlayer((prevPlayer) => {
        return prevPlayer?.map((player,index) => {
          if (index === 1) {
            return { ...player, gamesNeededToWin: races[1] };
          }
          if (index === 0) {
            return { ...player, gamesNeededToWin: races[0] };
          }
          return player;
        });
      });
    }
  }

  return (
    <div className="bracket match-width">
      {player?.map(player =>(
        <div key={player._id}>
          <SingleMatchPlayerLine 
            hiddenWinnerButton={hiddenWinnerButton} 
            setHiddenWinnerButton={setHiddenWinnerButton} 
            key={player._id} 
            player={player} />
        </div>
      ))}
    </div>
  );
}

export default SingleMatch;
