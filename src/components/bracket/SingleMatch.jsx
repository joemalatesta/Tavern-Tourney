
const SingleMatch = (props) => {
  // need to have a way to identify which round I'm playing in. then save the players into the array of arrays for that round. might need to adjust the model on the back end to have different rounds. this way the bracket can handle people playing faster than the current round.
  // here is where I should pair the players into a matchbring in playerObj and 
  // then send the winner to the bracket level
  // Should have winner here.
  // need to have the winner function passed to here
  const handleClick = () => {
    // props.getIndex(props.player)
    props.handleRoundPlayers(props.player)
  }
  return (
    <>
      {props.player.name}
      <button onClick={() => handleClick() }>Index</button><br/>
    </>
  )
}

export default SingleMatch;
