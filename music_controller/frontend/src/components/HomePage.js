import React from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    link,
    Redirect,
} from "react-router-dom";

const HomePage = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <p>This is home page.</p>
                </Route>
                <Route path="/join" component={RoomJoinPage} />
                <Route path="/create" component={CreateRoomPage} />
            </Switch>
        </Router>
    );
};

export default HomePage;
