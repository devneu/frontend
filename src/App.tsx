import React, { ReactElement, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.scss';
import ReduxExampleContainer from './components/ReduxExample';

import Navigation from './components/Navigation'
import Fallback from './components/Fallback/Fallback'
import SignIn from "./pages/SignIn/SignIn";
import SignOut from "./pages/SignOut/SignOut";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

const Home = lazy(() => import('./pages/Home/Home' /*webpackChunkName: "HomePage" */))
const Chat = lazy(() => import('./pages/Chat/Chat' /*webpackChunkName: "ChatPage" */))
const Weather = lazy(() => import('./pages/Weather/Weather' /*webpackChunkName: "WeatherPage" */))
const Blog = lazy(() => import('./pages/Blog' /*webpackChunkName: "BlogPage" */))

function App(): ReactElement {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Fallback />}>
        <main>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/chat'>
              <Chat />
            </Route>
            <Route path='/weather'>
              <Weather />
            </Route>
            <Route path='/blog'>
              <Blog />
            </Route>
            <Route path='/sign-in'>
              <SignIn />
            </Route>
            <Route path='/redux-example'>
              <ReduxExampleContainer />
            </Route>
            <Route path='/forgot-password'>
              <ForgotPassword />
            </Route>
            <Route path='/sign-out'>
              <SignOut />
            </Route>
          </Switch>
        </main>
      </Suspense>
    </>
  );
}

export default App;
