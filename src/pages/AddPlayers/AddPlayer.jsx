import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import AllPlayers from "../../components/players/AllPlayers";

const AddPlayer = (props) => {
	const navigate = useNavigate()
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    rank: 0
  })


  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }


  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddPlayer(formData)
  }

	const handleStartMatch = () => {
		
		navigate('/bracket')
	}


	return (
		<div className="match-bracket green-felt">
			<h1 className="center">Add/Remove Players to Match</h1>
			<form className="center" autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="center">
					<label className="center">
						Players Name (unique required)
					</label>
					<input  
						className="center"
						type="text"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="center">
					<label className="center">
						Players Rank
					</label>
					<input 
						type="number"
						className="center"
						name="rank"
            value={formData.rank}
            onChange={handleChange}
					/>
				</div>
				<div className="center">
					<button
						type="submit"
            disabled={!validForm}
					>
						Add Player
					</button>
				</div>
			</form>
			<AllPlayers  players={props.players} />
			<button onClick={handleStartMatch} >Fill bracket and start match</button>
		</div>
	)
}

export default AddPlayer;
// const [playerName, setPlayerName] = useState('')
// const [playerRank, setPlayerRank] = useState('')
// const [id, setId] = useState(1)

// const handleAddName =(evt) => {
//   setPlayerName(evt.target.value)
// }

// const handleAddRank = (evt) => {
//   setPlayerRank(evt.target.value)
// }

// const handleSubmit = (evt) => {
//   evt.preventDefault()
//   const formData = {
//     name: playerName,
//     rank: playerRank,
//     id: id 
//   }
//   props.addPlayer(formData)
//   setPlayerRank('')
//   setPlayerName('')
//   setId(id + 1)
// }

// return ( 
//   <>
//     <form onSubmit={handleSubmit}>
//       <label>Player Name:</label>
//       <input 
//         type="text" 
//         onChange={handleAddName}
//         value={playerName} 
//       />
//       <label>Player Rank:</label>
//       <input 
//         value={playerRank}
//         type="text"
//         onChange={handleAddRank}
//       />
//       <button>Add Player</button>
//     </form>
//   </>
//  );