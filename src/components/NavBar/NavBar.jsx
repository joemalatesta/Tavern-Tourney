// npm modules
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <div className='nav-bar'>
          <NavLink to='/'>Welcome {user.name}</NavLink>
          <NavLink to="/add-player">Add Player </NavLink>
          <NavLink to="" onClick={handleLogout}>LOG OUT</NavLink>
          <NavLink to="/auth/change-password">Change Password</NavLink>
        </div>
      :
        <>
          <NavLink to="/auth/login">Log In</NavLink>
          <NavLink to="/auth/signup">Sign Up</NavLink>
        </>
      }
    </nav>
  )
}

export default NavBar
