
import './App.css';
import Initial from './Pages/Initial/Initial';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Porque from './Pages/Porque/Porque';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Initial/>} />
        <Route path="/porque" element={<Porque/>} />
      </Routes>
    </Provider>
  );
}

export default App;
