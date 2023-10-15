import { useState, useEffect } from 'react';
import ThreeBracket from './ThreeBracket';

import { toupleOfTouples } from '../../services/services';

const Bracket = ({touples}) => {
  const [twoMatch, setTwoMatch] = useState([])


  useEffect(() => {
    setTwoMatch(toupleOfTouples(touples))
  }, [touples]);

  return (
    <>
      {twoMatch.map((match)=>(
        <ThreeBracket key={Math.random()} match={match}/>
      ))}
    </>
  );
};

export default Bracket;