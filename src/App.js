import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialouges from './components/dialouges/Dialouges'

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Routes >
            <Route path="/profile" element={<Profile name={"Elon Musk"} />} />
            <Route path="/dialouges" element={<Dialouges />} />
          </Routes>
          
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
