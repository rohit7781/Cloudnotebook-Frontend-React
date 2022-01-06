import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import Notestate from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import { useState } from 'react';
import Footer from './components/Footer';
import Errospage from './components/Errospage';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [alert, setAlert] = useState(null);
  const [progress, setProgress] = useState(0)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Notestate>
        <Router>
          <div>
            <LoadingBar
              height={3}
              color='#e3c24a'
              progress={progress}
            />
            <Navbar />
            <Alert alert={alert} />
            <Routes>
              <Route exact path="/" element={<Home setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path="/mynotes" element={<About setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path="/login" element={<Login setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path="/signup" element={<Signup setProgress={setProgress} showAlert={showAlert} />} />
              <Route path="*" element={<Errospage />} />
            </Routes>

            <Footer />
          </div>
        </Router>
      </Notestate>
    </>
  );
}

export default App;
