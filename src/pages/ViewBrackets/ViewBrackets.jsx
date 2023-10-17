import { useNavigate } from "react-router-dom"
import * as playerService from '../../services/playerService'

const ViewBrackets = (props) => {
  const navigate = useNavigate()
  console.log(props.tourneyMatch);
  
  const handleClick = async (game) => {
    console.log(game);
    
    
    playerService.findOne(game.players)
    await props.setSingleMatch(game.players)

    await props.handleTouples
    navigate('/bracket')
  }
 
  return (
    <>
      <div className="match-bracket green-felt">
        {props.tourneyMatch.map(game => (
          <div key={game._id}>
            <button onClick={()=>handleClick(game)}>{ game.name } : {game.enum}</button> 
              
          </div>
          )
        )}  
      
    
      </div>
    </>
  )
}
 
export default ViewBrackets