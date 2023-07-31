import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Signin from "./signin/Signin";
import Dashboard from './dashboard/Dashboard';
import SignUp from './signup/Signup';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Signin/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/login" element={<Signin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </Router>
  )
}

export default App
