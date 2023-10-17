import { useState } from "react"

const SingleMatchPlayerLine = ({player, setWinnerMatch, hiddenWinnerButton, setHiddenWinnerButton}) => {
  const [selectedGames, setSelectedGames] = useState([]);
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

  const isWinner = (name) => {
    console.log(`${name.name} is the winner!`);
    setHiddenWinnerButton(true)
    setWinnerMatch(name)

  }

  return ( 
    <div className="">
      <div className="">
        {player.name} ({player.rank}) {gameCheckboxes} 
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