
import SingleMatch from './SingleMatch';

const Bracket = ({tuples}) => {


  return (
      <>
        <div className='match-bracket green-felt'>
          {tuples?.map((match,idx)=>(
              <SingleMatch match={match} key={idx}/>
            ))}
        </div>
      </>
    );
  };
  
  export default Bracket;
