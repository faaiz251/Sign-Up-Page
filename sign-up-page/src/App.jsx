import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './signin.jsx';
import Signup from './signup.jsx';
import Addcourse from './addcourse.jsx';


function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#eeeeee',
      }}>
      <Router>
        <Routes>
          <Route path = "/Addcourse" element= {<Addcourse />} />
          <Route path="/signin" element={<Signin />} />
          <Route path={"/signup"} element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 
