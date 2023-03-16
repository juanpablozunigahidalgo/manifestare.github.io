import Quote from '../../Engine/engine';
import "./Initial.css";
import { Link } from 'react-router-dom';


const Initial = () => {



    return ( 
    <div>
    <p className='texta'> <Link className='link' to="/porque">Por que?</Link></p>
    <div className='initial'>
    <Quote></Quote>
    </div>
    </div>
    );
  };
  export default Initial;