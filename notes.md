need to save each match round as an array(saves match) 
based on how many players there will be up to 6 rounds on single elim.
need to add a loss in players model? (or game model) for double elim
need to pull each round from match data to the bracket
mark each array based on games? 
  ex based on 64 players
    round 5 would have a length of 2
    round 4 length 4
    round 3 length 8
    round 2 length 16
    round 1 length 32



    Match = {
      round1: [{obj of two player},{obj 2 players}, {etc etc etc}],// this is the array sent from the initial 
      round2: [{obj of two player},{obj 2 players}, {etc etc etc}],
      round3: [{obj of two player},{obj 2 players}, {etc etc etc}],
      round4: [{obj of two player},{obj 2 players}, {etc etc etc}],
      round5: [{obj of two player},{obj 2 players}, {etc etc etc}],
    }

          // <div className="flex-column" id='round2'>
          //   <div>
          //     <Bracket/>
          //   </div>
          // </div>
          // <div className="flex-column"id='finalRound'>
          //   <div>
          //     <Bracket/>
          //   </div>
          // </div>

// const initialPlayers = [];
// const rounds = [[]];


//   const newRound = [];
//   for (let i = 0; i < players.length; i += 2) {
  
  //     const winner = player
  
  //     if (i % 4 === 0) {
    //       newRound.push([winner]);
    //     } else {
      //       newRound[newRound.length - 1].push(winner);
      //     }
      //   }
      //   rounds.push(newRound);
      
      
      // conductMatches(initialPlayers);
      
      // const winnersFirstRound = rounds[1].map((subRound) => subRound[0]);
      // conductMatches(winnersFirstRound);
      
      // const winnersSecondRound = rounds[2].map((subRound) => subRound[0]);
      // conductMatches(winnersSecondRound);
      
      
      // console.log(rounds);
      // const [round3, setRound3] = useState(Array(8).fill([null, null]))
      // const [round4, setRound4] = useState(Array(16).fill([null, null]))
      // const [round5, setRound5] = useState(Array(32).fill([null, null]))
      
      // const initialArray = Array(32).fill([null, null]);
      // const [players, setPlayers] = useState(initialArray);
      
      // Function to update the players array with new players
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
            
            
            
            
            // const [round1, setRound1] = useState([null,null])
            // const [round2, setRound2] = useState([null,null],[null,null])
            // const updatePlayers = (player) => {
            //   setRound1(prevPlayers => {
            //     const updated = prevPlayers.map((innerArray, index) => {
            //       if (innerArray[0] === null) {
            //         innerArray[0] = player;
            //       } else if (innerArray[1] === null) {
            //         innerArray[1] = player;
            //       } 
            //       return innerArray;
            //     });
            //     return updated;
            //   });
            // };
              
              
              
              
              
              // const customSort = (a, b) => {
                //   const indexOfA = playerObj.indexOf(a);
                //   const indexOfB = playerObj.indexOf(b);
                //   return indexOfA - indexOfB;
                // }
                
                
// import { useState, useEffect } from "react";
// import { getGameRace } from '../../services/gameServices';
// import SingleMatchPlayerLine from "./SingleMatchPlayerLine";
    // <div className=" bracket match-width  match-height">
    //   {player?.map((player, idx) =>(
    //     <div key={idx}>
    //       <SingleMatchPlayerLine
    //         setRound={props.setRound} 
    //         hiddenWinnerButton={hiddenWinnerButton} 
    //         setHiddenWinnerButton={setHiddenWinnerButton} 
    //         key={player._id} 
    //         player={player} 
    //         playerObj={props.playerObj}
    //         />
    //     </div>
    //   ))}
    // </div>

// const [hiddenWinnerButton, setHiddenWinnerButton] = useState(false);
// let sortedPlayers

// if(props?.match?.length === 2 ){
//   sortedPlayers = [...props.match].sort((a, b) => b.rank - a.rank);
// }
// const [player, setPlayer] = useState(sortedPlayers?.map(player => ({
//   ...player,
//   gamesNeededToWin: ''
// })))

// useEffect(() => {
//   getFirstPlayer(props.match)
// }, [props.match]);

// function getFirstPlayer(game) {
//   let sortedGame
//   if(game.name === 'Bye')return
//   if(game?.length === 2 ){
//     sortedGame = [...game].sort((a, b) => a.rank - b.rank);
//     let races = getGameRace(sortedGame[0], sortedGame[1]);
//     setPlayer((prevPlayer) => {
//       return prevPlayer?.map((player,index) => {
//         if (index === 1) {
//           return { ...player, gamesNeededToWin: races[1] };
//         }
//         if (index === 0) {
//           return { ...player, gamesNeededToWin: races[0] };
//         }
//         return player;
//       });
//     });
//   }
// }

// import { useState } from "react"

// 
/* ***************************************************************************************************** */

/* 

.button {
  border-radius: 8px;
  border: 1px solid white;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: antiquewhite#1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  margin: 10px;
  background-size: contain;
}






 */


// import * as gameService from '../../services/gameServices'
// const Bracket = ({playerObj, setRound}) => {
  
  //   let match = gameService.SplitIntoTuples(playerObj)
  
  
  
  //   return (
    //     <>
    
    //       {match.map((soloMatch, idx) => (
      //         soloMatch[0] === null && soloMatch[1] === null 
      //         ?
      //           <div key={idx} >no games yet</div>
      //         :  
      //         <SingleMatch 
      //           key={idx} 
      //           match={soloMatch} 
      //           setRound={setRound}  
      //           playerObj={playerObj}
      //         />
      //         ))
      // }
      
      //     </>
      //   )
      // }
      
      //   export default Bracket;
      
      
      
      
      
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
          // const [round1, setRound1] = useState([null, null]);
          // const [round2, setRound2] = useState([null, null], [null, null]);
          
          // const updatePlayers = (player) => {
          //   // First, check if the first round is full
          //   if (!round1.some((pair) => pair.includes(null))) {
          //     const winnersRound1 = round1.map((pair) => {
          //       const winner = simulateMatch(pair[0], pair[1]); // Your logic to determine the winner
          //       return [winner, null]; // Fill the first slot with the winner and leave the second as null
          //     });
          //     setRound1(winnersRound1);
          //   } else {
          //     // Place players in the first round
          //     setRound1((prevRound) => {
          //       const updatedRound = prevRound.map((pair) => {
          //         if (pair[0] === null) {
          //           return [player, null]; // Place the player in an empty slot
          //         }
          //         return pair;
          //       });
          //       return updatedRound;
          //     });
          //   }
          // };
          
          // return (
          //   <div className="bracket auto-width">
          //     <>
          //       {match.map((soloMatch, idx) => (
          //           soloMatch[0] === null && soloMatch[1] === null 
          //         ?
          //           <div key={idx} >no games yet</div>
          //         :  
          //           <SingleMatch 
          //           key={idx} 
          //           match={soloMatch} 
          //           setRound={setRound}  
          //           playerObj={playerObj}
          //           />
          //         ))
          //       }
          //     </>
          //   </div>
          // );