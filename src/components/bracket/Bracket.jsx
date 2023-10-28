import SingleMatch from './SingleMatch'

const Bracket = ({ playerObj }) => {
  console.log(playerObj);
  return (
    <>
      {playerObj.map(player=> (
        <SingleMatch player={player} key={player._id}/>
      ))}
    </>
  )
}

export default Bracket;
