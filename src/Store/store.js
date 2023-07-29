import { createStore } from "redux";

const userReducer = (state = {user:null}, action) =>{
    switch(action.type){
        case 'SET_USER': 
            return action.payload;
        default:
            return state;
    }
};

const store = createStore(userReducer);

export default store;