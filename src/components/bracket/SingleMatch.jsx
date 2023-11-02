import { useState } from "react"

import SingleMatchPlayerLine from './SingleMatchPlayerLine'
const SingleMatch = (props) => {
  const [isHidden, setIsHidden] = useState(false)
 
  
  // need to have a way to identify which round I'm playing in. then save the players into the array of arrays for that round. might need to adjust the model on the back end to have different rounds. this way the bracket can handle people playing faster than the current round.
  // here is where I should pair the players into a matchbring in playerObj and 
  // then send the winner to the bracket level
  // Should have winner here.
  // need to have the winner function passed to here
  const handleClick = () => {
    setIsHidden(true)
    props.handleRoundPlayers(props.player)
  }

  
  console.log(props.matches, isHidden);

 

  return (
    <>
      <div className="bracket green-felt">
        {props?.match?.map(player=> 
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
