const SingleMatchPlayerLine = ({player}) => {
  console.log(player);


  return ( 
    
      <div className="flex bracket match-width2  match-height2">
        {player.name}
      </div>
   
  )
}

export default SingleMatchPlayerLine;
