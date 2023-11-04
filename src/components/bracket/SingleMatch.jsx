import { useEffect } from "react"
import * as gameService from '../../services/gameServices'
import SingleMatchPlayerLine from './SingleMatchPlayerLine'

const SingleMatch = (props) => {
  // const [isHidden, setIsHidden] = useState(false)
  console.log(props.match);
  const playerMatches = gameService.getFirstPlayer(props.match)
  let gamesNeededToWin = gameService.getGameRace(props?.match[0], props?.match[1])


  
  console.log(playerMatches)
  const match = [{...props.match[0], gamesNeeded: gamesNeededToWin[0]}, {...props.match[1], gamesNeeded: gamesNeededToWin[1]}]

  // need to have a way to identify which round I'm playing in. then save the players into the array of arrays for that round. might need to adjust the model on the back end to have different rounds. this way the bracket can handle people playing faster than the current round.
  // here is where I should pair the players into a matchbring in playerObj and 
  // then send the winner to the bracket level
  // Should have winner here.
  // need to have the winner function passed to here
  const handleClick = () => {
    // setIsHidden(true)
    props.handleRoundPlayers(props.player)
  }


  
  return (
    <>
      <div className="bracket">
        {match?.map(player=> 
          <SingleMatchPlayerLine
            player={player}
            handleClick={handleClick}
            key={player._id}
          />
        )}
      </div>
    </>
  )
  
}

export default SingleMatch;
