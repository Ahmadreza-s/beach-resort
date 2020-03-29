import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import SingleRoom from './pages/Rooms/SingleRoom/SingleRoom';
import Rooms from './pages/Rooms/Rooms';
import Error from './pages/Error/Error';

import {Switch, Link, Redirect, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/rooms'>
                    <Rooms/>
                </Route>
                <Route path='/rooms/:slug'>
                    <SingleRoom/>
                </Route>
                <Route path='/404'>
                    <Error/>
                </Route>
                <Redirect to='/404'/>
            </Switch>
        </>
    );
}

export default App;
