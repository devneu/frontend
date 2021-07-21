import React, {lazy, Suspense}from 'react'

import { Switch, Route } from 'react-router-dom'
import './App.scss';
import Navigation from './Components/Navigation';
import Fallback from './Components/Fallback/Fallback'

const HomeView  = lazy(()=> import('./View/HomeView/HomeView' /*webpackChunkName: "HomePage" */ ))
const ChatView = lazy(() => import('./View/ChatView/ChatView' /*webpackChunkName: "ChatPage" */))
const WeatherView  = lazy(()=> import('./View/WeatherView/WeatherView' /*webpackChunkName: "WeatherPage" */ ))

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Fallback />}>
    <main>
        
<Switch>
      <Route exact path='/'>
        <HomeView/>
        </Route>
        <Route path='/chat'>
          <ChatView/>
        </Route>
        <Route path='/weather'>
          <WeatherView/>
        </Route>
    </Switch>
      </main>
      </Suspense>
      
      
    
      </>
  );
}

export default App;
