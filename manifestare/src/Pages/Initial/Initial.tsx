import Quote from '../../Engine/engine';
import AudioPlayer from '../../musica/musica';

import "./Initial.css";
import { Link } from 'react-router-dom';

const Initial = () => {



    return ( 
    <div>
    <div className='sup'>
    <p className='texta'><Link className='linkdue' to="/porque">Por que?</Link></p>
    <AudioPlayer></AudioPlayer>
    </div>
    <div className='initial'>
    <Quote></Quote>
    </div>
    </div>
    );
  };
  export default Initial;