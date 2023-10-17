import { useState } from 'react';
import SingleMatch from './SingleMatch'

const ThreeBracket = (props) => {
  const [winner, setWinner] = useState([])

  const matchWinners = (player) => {
    setWinner((prevWinner)=> [player, ...prevWinner])
  }

  console.log(winner);
  return ( 
    <>
    <div className="">
      <div className="">
        <SingleMatch setWinnerMatch={matchWinners} match={props.match[0]}/>
        <SingleMatch setWinnerMatch={matchWinners} match={props.match[1]}/>
      </div>
      <div className="">
        {winner.length === 0 ?
          <p className='' >No Match yet</p>
        :  
          winner.length == 1 ? 
          <p className='' >{winner[0].name} vs </p>
          :
          <SingleMatch match={winner}/>
          
        }
      </div>
    </div>


    </>
   );
}
 
export default ThreeBracket;