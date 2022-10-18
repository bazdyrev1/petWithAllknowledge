import { RootState } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { defaultGitData } from "./defaultValuesStore";
import { IGitData } from "./types";

const gitDataSlice = createSlice({
    name: "gitData",
    initialState: defaultGitData as IGitData,
    reducers: {
      addGitData(state, action) {
  
        return { 
           ...action.payload
        }

      }
    }
})
export const { addGitData } = gitDataSlice.actions;

export const getGitData = (state: RootState) => state.gitData;

export const gitDataReducer = gitDataSlice.reducer;