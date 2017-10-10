import React from 'react';
import { Route, Router } from 'react-router-dom';
//import App from './App';
import Profile from './pages/Profile/profile';
import Home from './pages/Home/home';
import Video from './pages/Video/video';
import Art from './pages/Art/Art';
import Photography from './pages/Photography/Photography';
import Music from './pages/Music/Music';
import Writing from './pages/Writing/writing';
import WritingCreate from './pages/WritingCreate/writingCreate';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => {

}

export const makeMainRoutes = () => {
  return (
      <Router history={history} >
        <div>
          <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/profile" render={(props) => <Profile auth={auth} {...props} />} />
          <Route path="/video" render={(props) => <Video auth={auth} {...props} />} />
          <Route path="/art" render={(props) => <Art auth={auth} {...props} />} />
          <Route path="/music" render={(props) => <Music auth={auth} {...props} />} />
          <Route path="/photography" render={(props) => <Photography auth={auth} {...props} />} />
          <Route path="/writing" render={(props) => <Writing auth={auth} {...props} />} />
          <Route path="/writingCreate" render={(props) => <WritingCreate auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
