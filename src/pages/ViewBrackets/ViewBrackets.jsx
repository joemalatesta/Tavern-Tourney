import { useNavigate } from "react-router-dom"
import * as playerService from '../../services/playerService'

const ViewBrackets = (props) => {
  const navigate = useNavigate()
  console.log(props.tourneyMatch);
  
  const handleGetMatch = async (game) => {
    const playerObj = await Promise.all(game.players.map(player =>
      playerService.findOne(player)
    ));
    console.log(playerObj);
    await props.handleTouples(playerObj)
    navigate('/bracket')
  }
 
  return (
    <>
      <div className="match-bracket green-felt">
        {props.tourneyMatch.map(game => (
          <div key={game._id}>
            <button onClick={()=>handleGetMatch(game)}>{ game.name } : {game.enum}</button> 
              
          </div>
          )
        )}  
      
    
      </div>
    </>
  )
}
 
export default ViewBrackets