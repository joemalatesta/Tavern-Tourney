
const SingleMatch = (props) => {

  // here is where I should pair the players into a match
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
