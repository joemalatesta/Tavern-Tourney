import { useState, useEffect } from 'react';
import ThreeBracket from './ThreeBracket';

import { toupleOfTouples } from '../../services/services';

const Bracket = ({touples}) => {
  const [twoMatch, setTwoMatch] = useState([])


  useEffect(() => {
    setTwoMatch(toupleOfTouples(touples))
  }, [touples]);

  return (
    <div className='match-bracket'>
      {twoMatch.map((match)=>(
        <ThreeBracket key={Math.random()} match={match}/>
      ))}
    </div>
  );
};

export default Bracket;