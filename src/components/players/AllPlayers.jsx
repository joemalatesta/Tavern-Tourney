

const AllPlayers = (props) => {


  return ( 
    <>
      {props?.players?.map(player => (
        <div key={player._id}>
          {player.name} : {player.rank}
          <button onClick={()=> props.handleDeletePlayer(player._id)}> Delete</button>
        </div>
      ))}
    </>
    );
  }
  
  export default AllPlayers;
  