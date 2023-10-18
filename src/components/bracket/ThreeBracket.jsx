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
    <div className="flex">
      <div className="">
        <SingleMatch setWinnerMatch={matchWinners} match={props.match[0]}/>
        <SingleMatch setWinnerMatch={matchWinners} match={props.match[1]}/>
      </div>
      <div className="flex-justify">
        {winner.length === 0 ?
          <p className='bracket red-felt flex-justify' >Play match to get a winner</p>
        :  
          winner.length == 1 ? 
          <p className='bracket red-felt' >{winner[0].name} vs </p>
          :
          <SingleMatch match={winner}/>
          
        }
      </div>
    </div>


    </>
   );
}
 
export default ThreeBracket;