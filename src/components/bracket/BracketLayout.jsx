import Bracket from "./Bracket"
import { useState } from "react"


const BracketLayout = ({playerObj}) => {
  const [round2, setRound2] = useState([])
  const [round3, setRound3] = useState([])
  console.log(round2);
  


  console.log(playerObj.length);
  
  
  
  if(playerObj.length === 8) return ( 
      <div className="bracket auto-width">
        <div className="bracket-layout__main green-felt extend">
          <div className="">
            <div className="flex-column"id='match-1'>
              <Bracket setRound={setRound2} playerObj={playerObj}/>
            </div>
          </div>
          <div className="flex-column" id='round2'>
            <div>
              {round2 && round2.length%2===0 ?
                <Bracket setRound={setRound3} playerObj={round2}/>
              :
                <h1>no round yet</h1>
              }
            </div>
          </div>
          <div className="flex-column"id='finalRound'>
            <div>
              {round3 && round3.length%2===0?
                <Bracket playerObj={round3}/>
                :
                <h1>No round yet</h1>
              }
            </div>
          </div>
        </div>
      </div>
  )


  
}
 
export default BracketLayout;