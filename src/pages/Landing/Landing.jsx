
const Landing = ({ user }) => {


  return (
    <main>
      <h1>Tavern's Tourney's</h1>
      <h3>hello, {user ? user.name : 'friend'}</h3>
    </main>
  )
}

export default Landing
