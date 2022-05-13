
import './App.css';


import Productdetail from './Container/Productdetail';
import Productlist from './Container/Productlist';


import {
  
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
   
    <Routes>
    
      <Route exact path="/" element={<Productlist/>} />
    
      <Route exact path="/productdetail/:productid" element={  <Productdetail/>} />
    
    
    
    </Routes>
      
     
   
      
  </div>
  );
}

export default App;
