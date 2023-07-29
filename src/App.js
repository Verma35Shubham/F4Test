import React from "react"
import { Provider } from "react-redux";
import store from "./Store/store";
import { Routes, Route } from "react-router";
import Signin from "./Components/Signin";
import Profile from "./Components/Profile";
import "./App.css";


const App = () => {
    return(
        <Provider store={store}>
            <div>
                <Routes>
                    <Route  path="" element={<Signin/>}/>
                    <Route  path="/profile" element={<Profile/>}/>
                </Routes>
            </div>
        </Provider>
    );
};

export default App;