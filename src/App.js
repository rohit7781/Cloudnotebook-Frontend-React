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

function App() {
  return (
    <>
    <Notestate>
    <Router>
    <div>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/about" element={<About/>} />

    </Routes>
    </div>
      </Router>
      </Notestate>
      </>
  );
}

export default App;
