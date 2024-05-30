
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lap from './Lap';
import Forgot from './Forgot';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">

       <BrowserRouter>
       <Routes>
        <Route path="/Lap" element={<Lap></Lap>}/>
        <Route path="/Forgot" element={<Forgot></Forgot>}/>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}/>

       </Routes>
      
       </BrowserRouter>

      
    </div>
  );
}

export default App;
