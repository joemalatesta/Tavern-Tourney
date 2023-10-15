

const AllPlayers = (props) => {


  return ( 
    <>
      {props?.players?.map(player => (
        <div key={player._id}>
          {player.name} : {player.rank}
        </div>
      ))}
    </>
    );
  }
  
  export default AllPlayers;
  