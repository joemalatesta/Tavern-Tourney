import { useState } from "react"

const SingleMatchPlayerLine = ({player, hiddenWinnerButton, setHiddenWinnerButton}) => {
  const [selectedGames, setSelectedGames] = useState([]);
  const [winner, setWinner] = useState(false)
  const gameCheckboxes = []
 
  function handleCheckboxChange(gameNumber) {
    if (selectedGames.includes(gameNumber)) {
      setSelectedGames(selectedGames.filter((game) => game !== gameNumber));
    } else {
      setSelectedGames([...selectedGames, gameNumber]);
    }
  }

  for (let i = 1; i <= player.gamesNeededToWin; i++) {
    gameCheckboxes.push(
      <label key={Math.random()}>
        <input
          type="checkbox"
          name={`game${i}`}
          checked={selectedGames.includes(i)}
          onChange={() => handleCheckboxChange(i)}
        />
      </label>
    );
  }

  const isWinner = (player) => {
    console.log(player);// need to set this player to the next bracket depending on how many people are playing
    setHiddenWinnerButton(true)
    setWinner(true)
  }

  return ( 
    <div className={`bracket space-between ${winner? 'green-felt': 'red-felt'}` } >
      <div className="flex bracket match-width2  match-height2" id='match-5'>
        {player.name} ({player.rank}) {gameCheckboxes} {winner? 'WINNER' : ''}
      </div>
      {hiddenWinnerButton === false && 
        <div className="">winner<input
        type="checkbox"
        onChange={()=>isWinner(player)}
        /></div> 
    }
      
    </div>
  )
}
 
export default SingleMatchPlayerLine;