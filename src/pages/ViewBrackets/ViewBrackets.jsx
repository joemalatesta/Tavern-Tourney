import { useNavigate } from "react-router-dom"
import * as playerService from '../../services/playerService'
import * as matchService from '../../services/matchService'
import { useEffect, useState } from "react";

const ViewBrackets = ({user, handleTouples, setTourneyMatch, tourneyMatch}) => {
  const navigate = useNavigate()
  const [tourney, setTourney] = useState()
  
  const handleGetMatch = async (game) => {
    const playerObj = await Promise.all(game.matchPlayers.map(player =>
      playerService.findOne(player)
    ));
    await handleTouples(playerObj)
    navigate('/bracket')
  }
 
  useEffect(() => {
    const fetchMatches = async () => {
      const data = await matchService.index()
      setTourney(data)
    }
    fetchMatches()
  }, [tourneyMatch]);

  const handleDeleteMatch = async id => {
    const deletedMatch = await matchService.deleteOne(id)
    setTourneyMatch(tourneyMatch.filter(match=> match._id !== deletedMatch._id))
  }

  console.log(tourney);
  
  return (
    <>
      <div className="match-bracket green-felt">
        {tourney?.map(game => (
          <div key={game._id}>
            <button onClick={()=>handleGetMatch(game)}>{ game.name } : {game.gameType}</button>
            {user?.name==="Admin" &&
              <button onClick={()=>handleDeleteMatch(game._id)}>delete match</button>
            }
            
            
            
            
          </div>
          )
        )}  
      </div>
    </>
  )
}
 
export default ViewBrackets