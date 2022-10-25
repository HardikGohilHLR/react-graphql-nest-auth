// Auth Context
import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();
const AuthUpdateContext = createContext();

// State
const initialState = {
    user: null,
};

// Reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': 
        return { ...state, user: action.payload };
        case 'SET_USER': 
            return { ...state, user: action.payload };
        case 'LOGOUT': 
            localStorage.setItem('rgn_token', '');
            return {};
        default:
            return;
    }
}

// Use context
export const useAuthContext = (cb) => {
    return cb(useContext(AuthContext));
}

export const useAuthUpdateContext = () => {
    return useContext(AuthUpdateContext);
}

// Provider
export const AuthContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={state}>
            <AuthUpdateContext.Provider value={dispatch}>
                {children}
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    )
}
