import Bracket from "./Bracket"

const BracketLayout = ({playerObj, user}) => { 

  return ( 
    <div className="auto-width">
      <div className="bracket-layout__main green-felt2 extend">
        <div className="">
          <div className="flex-column"id='match-1'>
            <Bracket 
              playerObj={playerObj}
              user={user}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BracketLayout;
