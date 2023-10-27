import Bracket from "./Bracket"
import { useState, useEffect } from "react"


const BracketLayout = ({playerObj}) => {
  const [round1, setRound1] = useState([null,null])
  const [round2, setRound2] = useState([null,null],[null,null])
  // const [round3, setRound3] = useState([null,null],[null,null],[null,null],[null,null])
  // const [round4, setRound4] = useState([null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null])
  // const [round5, setRound5] = useState([null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null])

  useEffect(() => {
    console.log(round1);
    console.log(round2)
  }, [round2,round1]);

  console.log(playerObj)
  console.log(round1)
  console.log(round2)


  const customSort = (a, b) => {
    const indexOfA = playerObj.indexOf(a);
    const indexOfB = playerObj.indexOf(b);
    return indexOfA - indexOfB;
  }

  console.log(playerObj.length);
  
  if(playerObj.length === 8) return ( 
      <div className="bracket auto-width">
        <div className="bracket-layout__main green-felt2 extend">
          <div className="">
            <div className="flex-column"id='match-1'>
              <Bracket setRound={setRound2} playerObj={playerObj}/>
            </div>
          </div>
          <div className="flex-column" id='round2'>
            <div>
              {!round2.includes(null) &&
              <Bracket customSort={customSort} setRound={setRound1} playerObj={round2}/>
              }
            </div>
          </div>
          <div className="flex-column"id='finalRound'>
            <div>
              <Bracket customSort={customSort} playerObj={round1}/>
            </div>
          </div>
        </div>
      </div>
  )

  else return (
    <h1>No Matches</h1>
  )
  // if(playerObj.length === 16) return ( 
  //   <div className="bracket auto-width">
  //     <div className="bracket-layout__main green-felt extend">
  //       <div className="">
  //         <div className="flex-column"id='match-1'>
  //           <Bracket customSort={customSort} setRound={setRound2} playerObj={playerObj}/>
  //         </div>
  //       </div>
  //       <div className="flex-column" id='round2'>
  //         <div>
  //           {round3 && round3.length%2===0 ?
  //             <Bracket customSort={customSort} setRound={setRound2} playerObj={round3}/>
  //           :
  //             <h1>no round yet</h1>
  //           }
  //         </div>
  //       </div>
  //       <div className="flex-column"id='finalRound'>
  //         <div>
  //           {round2 && round2.length%2===0?
  //             <Bracket customSort={customSort} setRound={setRound1} playerObj={round2}/>
  //             :
  //             <h1>No round yet</h1>
  //           }
  //         </div>
  //       </div>
  //       <div className="flex-column"id='finalRound'>
  //         <div>
  //           {round1 && round1.length%2===0?
  //             <Bracket customSort={customSort} playerObj={round1}/>
  //             :
  //             <h1>No round yet</h1>
  //           }
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
  // if(playerObj.length === 32) return ( 
  //   <div className="bracket auto-width">
  //     <div className="bracket-layout__main green-felt extend">
  //       <div className="">
  //         <div className="flex-column"id='match-1'>
  //           <Bracket customSort={customSort} setRound={setRound2} playerObj={playerObj}/>
  //         </div>
  //       </div>
  //       <div className="flex-column" id='round2'>
  //         <div>
  //           {round4 && round4.length%2===0 ?
  //             <Bracket customSort={customSort} setRound={setRound3} playerObj={round4}/>
  //           :
  //             <h1>no round yet</h1>
  //           }
  //         </div>
  //       </div>
  //       <div className="flex-column"id='finalRound'>
  //         <div>
  //           {round3 && round3.length%2===0?
  //             <Bracket customSort={customSort} setRound={setRound2} playerObj={round3}/>
  //             :
  //             <h1>No round yet</h1>
  //           }
  //         </div>
  //       </div>
  //       <div className="flex-column"id='finalRound'>
  //         <div>
  //           {round2 && round2.length%2===0?
  //             <Bracket customSort={customSort} setRound={setRound1} playerObj={round2}/>
  //             :
  //             <h1>No round yet</h1>
  //           }
  //         </div>
  //       </div>
  //       <div className="flex-column"id='finalRound'>
  //         <div>
  //           {round1 && round1.length%2===0?
  //             <Bracket customSort={customSort} playerObj={round1}/>
  //             :
  //             <h1>No round yet</h1>
  //           }
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
  // if(playerObj.length === 32) return ( 
  //   <div className="bracket auto-width">
  //     <div className="bracket-layout__main green-felt extend">
  //       <div className="">
  //         <div className="flex-column"id='match-1'>
  //           <Bracket customSort={customSort} setRound={setRound5} playerObj={playerObj}/>
  //         </div>
  //       </div>
  //       <div className="flex-column" id='round2'>
  //         <div>
  //           {round5 && round5.length%2===0 ?
  //             <Bracket customSort={customSort} setRound={setRound4} playerObj={round5}/>
  //           :
  //             <h1>no round yet</h1>
  //           }
  //         </div>
  //       </div>
  //       <div className="flex-column"id='finalRound'>
  //         <div>
  //           {round4 && round4.length%2===0?
  //             <Bracket customSort={customSort} setRound={setRound3} playerObj={round4}/>
  //             :
  //             <h1>No round yet</h1>
  //           }
  //         </div>
  //       </div>
  //       <div className="flex-column"id='finalRound'>
  //         <div>
  //           {round3 && round3.length%2===0?
  //             <Bracket customSort={customSort} setRound={setRound2} playerObj={round3}/>
  //             :
  //             <h1>No round yet</h1>
  //           }
  //         </div>
  //       </div>
  //       <div className="flex-column"id='finalRound'>
  //         <div>
  //           {round2 && round2.length%2===0?
  //             <Bracket customSort={customSort} setRound={setRound1} playerObj={round2}/>
  //             :
  //             <h1>No round yet</h1>
  //           }
  //         </div>
  //       </div>
  //       <div className="flex-column"id='finalRound'>
  //         <div>
  //           {round1 && round1.length%2===0?
  //             <Bracket customSort={customSort} playerObj={round1}/>
  //             :
  //             <h1>No round yet</h1>
  //           }
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
  



  
}
 
export default BracketLayout;