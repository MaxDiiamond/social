import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialouges from './components/dialouges/Dialouges'
import Users from './components/users/Users';
import { onMessageChange, onPostChange } from './data/state';



function App(props) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Routes >
            <Route exact path="/" element={<Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              newPostText={props.state.profilePage.newPostText}
              onPostChange={props.onPostChange} 
              />} />

            <Route path="/profile" element={<Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              newPostText={props.state.profilePage.newPostText}
              onPostChange={props.onPostChange} />} />

            <Route path="/dialouges" element={<Dialouges
              dialouges={props.state.dialougePage} addMessage={props.addMessage} 
              onMessageChange={props.onMessageChange}
              newMessageText={props.state.dialougePage.newMessageText}
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
