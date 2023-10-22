const BracketLayout = ({singleMatch}) => {
  
  console.log(singleMatch);

    
  

  
  
  






  
  return ( 
    <div className="bracket">
      <div className="bracket-layout__main ">
        <div id='round1' className="bracket-layout__round bracket match-width  match-height">
          <div className="flex bracket match-width2  match-height2"id='match-1'></div>
          <div className="flex bracket match-width2  match-height2"id='match-2'></div>
          <div className="flex bracket match-width2  match-height2"id='match-3'></div>
          <div className="flex bracket match-width2  match-height2"id='match-4'></div>
        </div>
        <div className="bracket-layout__round bracket match-width  match-height"id='round2'>
          <div className="flex bracket match-width2  match-height2"id='match-5'></div>
          <div className="flex bracket match-width2  match-height2"id='match-6'></div>
        </div>
        <div className="bracket-layout__round bracket match-width  match-height"id='finalRound'>
          <div className="flex bracket match-width2  match-height2"id='final'></div>
        </div>
      </div>
    
    </div>
  )
}
 
export default BracketLayout;