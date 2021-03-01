import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Chat from './Component/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Component/Login';
import { auth } from './firebase';
import Spinner from 'react-spinkit';
import Logo from './Component/Logo/logo.png'

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src={Logo}
            alt=""
          />
          <Spinner
            name='ball-spin-fade=loader'
            color='purple' fadeIn='none'
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
            <>
              <Header />
              <AppBody>
                <Sidebar />
                <Switch>
                  <Route exact path="/">
                    <Chat />
                  </Route>
                </Switch>
              </AppBody>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
  display:grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >img {
    height: 100px;
    padding: 20px;
  }
`;

const AppBody = styled.div`
display: flex;
height: 100vh;
`;

