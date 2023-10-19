import { useState, useEffect, useRef } from "react"
import ListOfPlayers from "./ListOfPlayers"
import * as playerService from '../../services/playerService'
import { useNavigate } from "react-router-dom"

const CreateMatch = (props) => {
  const navigate = useNavigate()
  const formElement = useRef()
  const [match, setMatch] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    gameType: '',
    players: [],
  })
  const [players, setPlayers] = useState(props.players)
  
  useEffect(() => {
    const fetchPlayers = async () => {
      const data = await playerService.index()
      setPlayers(data)
    }
    fetchPlayers()
  }, []);

  
  const handleAddItem = (item) => {
    setMatch([item, ...match])
    setPlayers(players.filter(el => el._id !== item._id))
  }
  
  const handleRemoveItem = (item) => {
    setMatch(match.filter(el => el._id !== item._id))
    setPlayers([...players, item])
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
  
    if (name === "players") {
      // If the input name is "players," update the formData.players property
      setFormData(prevData => ({
        ...prevData,
        players: match
      }));
    } else {
      // For other input fields, update the formData as usual
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddMatch(formData)
    navigate('/view-brackets')
  }
  console.log('I am showing an array of object players here',match);//I am showing an array of object players here
  return (
    <main className="center bracket">
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        <label className="center">
						Match Name (unique required)
        </label>
        <input  
          className="center"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label className="center">
          Game Type (8-ball or 9-ball)
        </label>
        <input  
          className="center"
          type="text"
          name="gameType"
          value={formData.gameType}
          onChange={handleChange}
          required
        />
        <button>Create Match</button>
      </form>
      
      <section className="bracket flex">
        <ListOfPlayers 
          title='Available Players'
          players={players} 
          handleAddItem={handleAddItem}  
        />
        <ListOfPlayers
          title='Players assigned to Match' 
          players={match}
          handleRemoveItem={handleRemoveItem}
        />
      </section>
    </main>
  )
}

export default CreateMatch