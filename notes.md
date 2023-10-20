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