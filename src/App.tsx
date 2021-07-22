import React, {lazy, Suspense}from 'react'

import { Switch, Route } from 'react-router-dom'
import './App.scss';
import Navigation from './components/Navigation'
import Fallback from './components/Fallback/Fallback'

const Home  = lazy(()=> import('./pages/Home/Home' /*webpackChunkName: "HomePage" */ ))
const Chat = lazy(() => import('./pages/Chat/Chat' /*webpackChunkName: "ChatPage" */))
const Weather  = lazy(()=> import('./pages/Weather/Weather' /*webpackChunkName: "WeatherPage" */ ))

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Fallback />}>
    <main>
        
<Switch>
      <Route exact path='/'>
        <Home/>
        </Route>
        <Route path='/chat'>
          <Chat/>
        </Route>
        <Route path='/weather'>
          <Weather/>
        </Route>
    </Switch>
      </main>
      </Suspense>
      
      
    
      </>
  );
}

export default App;
