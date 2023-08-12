import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialouges from './components/dialouges/Dialouges'



function App(props) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Routes >
            <Route exact path="/" element={<Profile postData={props.state.profilePage} />} />
            <Route path="/profile" element={<Profile postData={props.state.profilePage} />} />
            <Route path="/dialouges" element={<Dialouges dialouges={props.state.dialougePage} />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
