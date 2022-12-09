import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from "./components/Authentication/Login";
import SignUp from './components/Authentication/Signup';
import Home from './components/Home/Home';

function App() {
  return (
  
       <div className="App">
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    
       

  );
}

export default App;
