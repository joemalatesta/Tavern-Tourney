const SingleMatchPlayerLine = ({player}) => {
  console.log(player);


  return ( 
      <div className="flex">

      <div className="flex start bracket match-width2  match-height2">
        {player.name}
        </div>
          <div className="end center">
          Winner <input type="checkbox" />
          </div>
      </div>
   
  )
}

export default SingleMatchPlayerLine;
