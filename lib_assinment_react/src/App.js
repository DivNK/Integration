import logo from './logo.svg';
import './App.css';
import Landingpage from './Component/Landingpage'
import Listbook from './Component/Listbook'
import Header from './Component/Header'
import Login from './Component/Login'
import Details from './Component/Details'
import {
 
  Routes,
  Route,

} from "react-router-dom";
function App() {
  return (<><Header/>
    <Routes>
    
    <Route element={<Landingpage />} path="/" />
    <Route element={<Login />} path="/login" />
    <Route element={<Listbook />} path="/list" />
    <Route element={<Details />} path="/details" />
  
  </Routes>
  
  </>
  );
}

export default App;
