 import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from './screens/Homescreen/homeScreen';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { AboutScreen } from './screens/About/aboutScreen';
function App() {
  return <Router>
    <Routes>
    <Route path='/' element={<HomeScreen />} />
    <Route path='/About' element={<AboutScreen />} />
    </Routes>
    </Router>
  
}

export default App;
