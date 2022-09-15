import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ISingIn } from "./types";

const initialState = {
  isAdmin: false,
  isAuth: false,
  login: "",
};

export const singInSlice = createSlice({
  name: "singIn",
  initialState: initialState as ISingIn,
  reducers: {
    authUser(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { authUser } = singInSlice.actions;

export const isAuth = (state: RootState) => state.singIn;

export const singInReducer = singInSlice.reducer;
