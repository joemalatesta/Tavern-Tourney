import Bracket from "./Bracket";

const BracketLayout = ({playerObj}) => {
  
  console.log(playerObj.length);
  let round2
  let round3
  
  if(playerObj.length === 8) return ( 
      <div className="bracket auto-width">
        <div className="bracket-layout__main green-felt extend">
          <div className="">
            <div className="flex-column"id='match-1'>
              <Bracket playerObj={playerObj}/>
            </div>
          </div>
          <div className="flex-column" id='round2'>
            <div>
              {round2 ?
                <Bracket round2={round2}/>
              :
                <h1>no round yet</h1>
              }
            </div>
          </div>
          <div className="flex-column"id='finalRound'>
            <div>
              {round3 ?
                <Bracket round3={round3}/>
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