import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import SingleRoom from './pages/Rooms/SingleRoom/SingleRoom';
import Rooms from './pages/Rooms/Rooms';
import Error from './pages/Error/Error';

import {Switch, Redirect, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import {useDispatch} from 'react-redux';
import {fetchRooms} from './store/rooms/rooms.actions';

function App() {
    const dispatch = useDispatch();
    const initRooms = React.useCallback(() => dispatch(fetchRooms()), [dispatch]);
    React.useEffect(() => {
        initRooms();
    }, [initRooms]);

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
