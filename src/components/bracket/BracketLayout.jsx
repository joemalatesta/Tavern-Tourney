import Bracket from "./Bracket"
import { useState } from "react"


const BracketLayout = ({playerObj}) => {
  const [round2, setRound2] = useState([])
  const [round3, setRound3] = useState([])
  const [round4, setRound4] = useState([])
  const [round5, setRound5] = useState([])
  const [round6, setRound6] = useState([])

  console.log(round2);
  


  const customSort = (a, b) => {
    const indexOfA = playerObj.indexOf(a);
    const indexOfB = playerObj.indexOf(b);
    return indexOfA - indexOfB;
  }

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
                <Bracket customSort={customSort} setRound={setRound3} playerObj={round2}/>
              :
                <h1>no round yet</h1>
              }
            </div>
          </div>
          <div className="flex-column"id='finalRound'>
            <div>
              {round3 && round3.length%2===0?
                <Bracket customSort={customSort} playerObj={round3}/>
                :
                <h1>No round yet</h1>
              }
            </div>
          </div>
        </div>
      </div>
  )
  
  if(playerObj.length === 16) return ( 
    <div className="bracket auto-width">
      <div className="bracket-layout__main green-felt extend">
        <div className="">
          <div className="flex-column"id='match-1'>
            <Bracket customSort={customSort} setRound={setRound2} playerObj={playerObj}/>
          </div>
        </div>
        <div className="flex-column" id='round2'>
          <div>
            {round2 && round2.length%2===0 ?
              <Bracket customSort={customSort} setRound={setRound3} playerObj={round2}/>
            :
              <h1>no round yet</h1>
            }
          </div>
        </div>
        <div className="flex-column"id='finalRound'>
          <div>
            {round3 && round3.length%2===0?
              <Bracket customSort={customSort} setRound={setRound4} playerObj={round3}/>
              :
              <h1>No round yet</h1>
            }
          </div>
        </div>
        <div className="flex-column"id='finalRound'>
          <div>
            {round4 && round4.length%2===0?
              <Bracket customSort={customSort} setRound={setRound5} playerObj={round4}/>
              :
              <h1>No round yet</h1>
            }
          </div>
        </div>
      </div>
    </div>
  )
  if(playerObj.length === 32) return ( 
    <div className="bracket auto-width">
      <div className="bracket-layout__main green-felt extend">
        <div className="">
          <div className="flex-column"id='match-1'>
            <Bracket customSort={customSort} setRound={setRound2} playerObj={playerObj}/>
          </div>
        </div>
        <div className="flex-column" id='round2'>
          <div>
            {round2 && round2.length%2===0 ?
              <Bracket customSort={customSort} setRound={setRound3} playerObj={round2}/>
            :
              <h1>no round yet</h1>
            }
          </div>
        </div>
        <div className="flex-column"id='finalRound'>
          <div>
            {round3 && round3.length%2===0?
              <Bracket customSort={customSort} setRound={setRound4} playerObj={round3}/>
              :
              <h1>No round yet</h1>
            }
          </div>
        </div>
        <div className="flex-column"id='finalRound'>
          <div>
            {round4 && round4.length%2===0?
              <Bracket customSort={customSort} setRound={setRound5} playerObj={round4}/>
              :
              <h1>No round yet</h1>
            }
          </div>
        </div>
        <div className="flex-column"id='finalRound'>
          <div>
            {round5 && round5.length%2===0?
              <Bracket customSort={customSort} playerObj={round5}/>
              :
              <h1>No round yet</h1>
            }
          </div>
        </div>
      </div>
    </div>
  )
  if(playerObj.length === 32) return ( 
    <div className="bracket auto-width">
      <div className="bracket-layout__main green-felt extend">
        <div className="">
          <div className="flex-column"id='match-1'>
            <Bracket customSort={customSort} setRound={setRound2} playerObj={playerObj}/>
          </div>
        </div>
        <div className="flex-column" id='round2'>
          <div>
            {round2 && round2.length%2===0 ?
              <Bracket customSort={customSort} setRound={setRound3} playerObj={round2}/>
            :
              <h1>no round yet</h1>
            }
          </div>
        </div>
        <div className="flex-column"id='finalRound'>
          <div>
            {round3 && round3.length%2===0?
              <Bracket customSort={customSort} setRound={setRound4} playerObj={round3}/>
              :
              <h1>No round yet</h1>
            }
          </div>
        </div>
        <div className="flex-column"id='finalRound'>
          <div>
            {round4 && round4.length%2===0?
              <Bracket customSort={customSort} setRound={setRound5} playerObj={round4}/>
              :
              <h1>No round yet</h1>
            }
          </div>
        </div>
        <div className="flex-column"id='finalRound'>
          <div>
            {round5 && round5.length%2===0?
              <Bracket customSort={customSort} setRound={setRound6} playerObj={round6}/>
              :
              <h1>No round yet</h1>
            }
          </div>
        </div>
        <div className="flex-column"id='finalRound'>
          <div>
            {round6 && round6.length%2===0?
              <Bracket customSort={customSort} playerObj={round6}/>
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