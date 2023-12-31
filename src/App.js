import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialouges from './components/dialouges/Dialouges'
import Users from './components/users/Users';

function App(props) {
  console.log(props);
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Routes >
            <Route exact path="/" element={<Profile
              profilePage={props.state.profilePage}
              newPostText={props.state.profilePage.newPostText}
              dispatch={props.dispatch}
              />} />

            <Route path="/profile" element={<Profile
              profilePage={props.state.profilePage}
              newPostText={props.state.profilePage.newPostText}
              dispatch={props.dispatch}
               />} />

            <Route path="/dialouges" element={<Dialouges
              dialouges={props.state.dialougePage}  
              newMessageText={props.state.dialougePage.newMessageText}
              dispatch={props.dispatch}
              />} />

            <Route path="/users" element={
              <Users
                profilePage={props.state.profilePage} />
            } />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
