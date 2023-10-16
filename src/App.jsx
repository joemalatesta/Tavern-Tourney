// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AddPlayer from './pages/AddPlayers/AddPlayer'
import Bracket from './components/bracket/Bracket'
import ThreeBracket from './components/bracket/ThreeBracket'
// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as playerService from './services/playerService'
import * as services from './services/services'
// styles
import './App.css'



function App() {
  const [playMatch, setPlayMatch] = useState(false)
  const [players, setPlayers] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPlayers = async () => {
      const data = await playerService.index()
      setPlayers(data)
    }
    fetchPlayers()
  }, []);

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }
  
  const handleAddPlayer = async (newPlayerData) => {
    const newPlayer = await playerService.create(newPlayerData)
    setPlayers([...players, newPlayer])
  }

  const touples = services.shuffleAndSplitIntoTuples(players);

  const isDisabled = () => {
    setPlayMatch(!playMatch)
  }

  return (
    <>
      <NavBar playMatch={playMatch} user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} players={players}/>} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          disable={isDisabled}
          path="/add-player"
          element={<AddPlayer playMatch={playMatch} isDisabled={isDisabled} handleAddPlayer={handleAddPlayer} players={players}/>}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
         <Route 
          path="/bracket"
          element={<Bracket touples={touples}/>}
        />
   
      </Routes>
    </>
  )
}

export default App
