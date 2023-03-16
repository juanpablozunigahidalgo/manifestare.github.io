
import './App.css';
import Initial from './Pages/Initial/Initial';
import { Routes, Route} from "react-router-dom";
import Porque from './Pages/Porque/Porque';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Initial/>} />
      <Route path="/porque" element={<Porque/>} />
    </Routes>
  );
}

export default App;
