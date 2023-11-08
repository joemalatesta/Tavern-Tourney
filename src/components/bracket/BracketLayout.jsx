import { useState } from "react";
import Bracket from "./Bracket"
import * as gameService from '../../services/gameServices'

const BracketLayout = ({playerObj, user}) => { 
  const [matches, setMatches] = useState(gameService.SplitIntoTuples(playerObj));
  const [round, setRound] = useState([
    [null, null],[null, null],[null, null],[null, null],
    [null, null],[null, null],[null, null],[null, null],
    [null, null],[null, null],[null, null],[null, null],
    [null, null],[null, null],[null, null],[null, null]
  ])

  const [round1, setRound1] = useState([
    [null, null],[null, null],[null, null],[null, null],
    [null, null],[null, null],[null, null],[null, null]
  ]);

 
  return ( 
    <div className="auto-width">
      <div className="bracket-layout__main green-felt2 extend">
        <div className="flex">
          <div className="flex-column"id='match-1'>
            <Bracket 
              playerObj={playerObj}
              user={user}
              matches={matches}
              round={round}
              setRound={setRound1}
            />
          </div>
          <div className="flex flex-column">
            <Bracket 
              playerObj={playerObj}
              user={user}
              matches={round1}
              round={round1}
              setRound={setRound1}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BracketLayout;
