import "./App.css";
import Login from "./Components/Login/Login";
import Error from "./Components/Error/Error";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { PrivateRoute } from './Components/PrivateRoute';
import axios from 'axios';

function App() {
    const ACCESS_TOKEN = localStorage.getItem('access_token');
    axios.defaults.baseURL = 'http://localhost:8000';
    axios.defaults.headers.common['Authorization'] = 'Token ' + ACCESS_TOKEN;
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <Route exact path="/login" component={Login} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
