import React, { ReactElement, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import ReduxExampleContainer from './components/ReduxExample';

import Navigation from './components/Navigation';
import Fallback from './components/Fallback/Fallback';
import SignIn from './pages/SignIn/SignIn';
import SignOut from './pages/SignOut/SignOut';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PostPage from './pages/BlogPost/BlogPost';

const Chat = lazy(() => import('./pages/Chat/Chat' /* webpackChunkName: "ChatPage" */));
const Weather = lazy(() => import('./pages/Weather/Weather' /* webpackChunkName: "WeatherPage" */));
const Blog = lazy(() => import('./pages/Blog' /* webpackChunkName: "BlogPage" */));

function App(): ReactElement {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Fallback />}>
        <main>
          <Switch>
            <Route exact path="/">
              {/* <Home /> */}
              <ComingSoon />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route path="/weather">
              <Weather />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/blog/:postId">
              <PostPage />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/redux-example">
              <ReduxExampleContainer />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/sign-out">
              <SignOut />
            </Route>
            <Route path="/coming-soon">
              <ComingSoon />
            </Route>
            <Route path="/page-not-found">
              <PageNotFound />
            </Route>
          </Switch>
        </main>
      </Suspense>
    </>
  );
}

export default App;
