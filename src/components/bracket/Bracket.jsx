import * as gameService from '../../services/gameServices'
import SingleMatch from './SingleMatch'
const Bracket = ({playerObj, setRound}) => {
  console.log(playerObj);
  let match = gameService.SplitIntoTuples(playerObj)
  console.log(match);
  return (
    <>
      {match.map((soloMatch, idx) => (
        <SingleMatch 
          key={idx} 
          match={soloMatch} 
          setRound={setRound}  
        />
      ))

      }
    </>
  )
};
  
  export default Bracket;





// const ThreeBracket = (props) => {

//   return ( 
//     <>
//     <div className="flex">
//       <div className="match-width">
//         <SingleMatch matchWinner={matchWinners} match={props.match[0]}/>
//         <SingleMatch matchWinner={matchWinners} match={props.match[1]}/>
//       </div>
//       <div className="flex-justify match-width">
//         {winner.length === 0 ?
//           <p className='bracket red-felt flex-justify match-width' >Play match to get a winner</p>
//         :  
//           winner.length == 1 ? 
//           <p className='bracket red-felt match-width' >{winner[0].name} vs </p>
//           :
//           <div className='match-width'>
//             <SingleMatch match={winner}/>
//           </div>
          
//         }
//       </div>
//     </div>


//     </>
//    );
// }
 
// export default ThreeBracket;