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
            <Route exact path="/" element={<Profile name={"Elon Musk"} postData={props.postData} />} />
            <Route path="/profile" element={<Profile name={"Elon Musk"} postData={props.postData} />} />
            <Route path="/dialouges" element={<Dialouges messages={props.messages} />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
