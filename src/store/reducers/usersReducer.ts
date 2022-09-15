import { createSlice } from '@reduxjs/toolkit';
import { RootState } from "../index";
import { v4 as uuidv4 } from "uuid";
import { IUsers } from './types';

export const usersSlice = createSlice({
    name: 'users',
    initialState: [] as IUsers[],
    reducers: {
        addUser(state, action){
            return[
                ...state,
                {
                    ...action.payload,
                    role: 'USER',
                    authorId: uuidv4()
                }
            ]
            
        }
    }
})

export const { addUser} = usersSlice.actions;

export const getAllUsers = (state: RootState) => state.users;

export const usersReducer = usersSlice.reducer;