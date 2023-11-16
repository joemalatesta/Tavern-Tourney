import { useState } from "react";
import Bracket from "./Bracket"
import * as gameService from '../../services/gameServices'

const BracketLayout = ({playerObj, user}) => { 
  const [matches, setMatches] = useState(gameService.SplitIntoTuples(playerObj));
  const [round1, setRound1] = useState([
    [null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]
  ])

  const [round2, setRound2] = useState([
    [null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]
    
  ])

  const [round3, setRound3] = useState([
    [null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]
  ])
  
  const [round4, setRound4] = useState([
    [null, null],[null, null],[null, null],[null, null]
  ])
  const [round5, setRound5] = useState([
    [null, null],[null, null]
  ])
  const [round6, setRound6] = useState([
    [null, null]
  ])
 
  // console.log('R0', round);
  // console.log('R1',round1);
  // console.log('R2',round2);
  // console.log('R3',round3);

  return ( 
    <div className="auto-width">
      <div className="bracket-layout__main green-felt2 extend">
        <div className="flex">
          <div className="flex-column"id='match-1'>
            <Bracket 
              playerObj={playerObj}
              user={user}
              matches={matches}
              round={round1}
              setRound={setRound1}
            />
          </div>
          <div className="flex flex-column">
            <Bracket 
              playerObj={round1.flat()}
              user={user}
              matches={round1}
              round={round2}
              setRound={setRound2}
            />
          </div>
          <div className="flex flex-column">
            <Bracket 
              playerObj={round2.flat()}
              user={user}
              matches={round2}
              round={round3}
              setRound={setRound3}
            />
          </div>
          <div className="flex flex-column">
            <Bracket 
              playerObj={round3.flat()}
              user={user}
              matches={round3}
              round={round4}
              setRound={setRound4}
            />
          </div>
          <div className="flex flex-column">
            <Bracket 
              playerObj={round4.flat()}
              user={user}
              matches={round4}
              round={round5}
              setRound={setRound5}
            />
          </div>
          <div className="flex flex-column">
            <Bracket 
              playerObj={round5.flat()}
              user={user}
              matches={round5}
              round={round6}
              setRound={setRound6}
            />
          </div>
          <div className="flex flex-column">
            <Bracket 
              playerObj={round6.flat()}
              user={user}
              matches={round6}
              round={round3}
              setRound={setRound3}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BracketLayout;
