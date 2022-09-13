import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

interface ISingIn{
    isAdmin: boolean,
    isAuth: boolean,
    login: string,
}

const initialState = {
    isAdmin: false,
    isAuth: false,
    login: ''
}

export const signInSlice = createSlice({
    name: 'signIn',
    initialState: initialState as ISingIn,
    reducers: {
        authUser(state, action) {
       
            return {
                ...state,
                ...action.payload
            }
            
        }
    }
})


export const { authUser} = signInSlice.actions;

export const isAuth = (state: RootState) => state.signIn;
export const signInReducer = signInSlice.reducer;