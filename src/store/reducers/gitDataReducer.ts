import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";

import { defaultGitData } from "./defaultValuesStore";
import { RootState }      from "../index";
import { IGitData }       from "./types";

export const fetchGitData = createAsyncThunk(
  'gitData/fetchGitData',
  async (request: string) => {
    const response = await fetch(`https://api.github.com/search/users?q=${request}`);
    const data     = response.json();
    return data;
  }
)

const gitDataSlice = createSlice({
    name        : "gitData",
    initialState: defaultGitData as IGitData,
    reducers    : {
      addGitData(state, action) {
  
        return { 
           ...action.payload
        }

      }
    },
    /* eslint-disable */
    extraReducers: (builder) => {
      builder.addCase(fetchGitData.fulfilled, (_, action) => {
        return action.payload.items[0]
      });
    },
})
export const { addGitData } = gitDataSlice.actions;

export const getGitData = (state: RootState) => state.gitData;

export const gitDataReducer = gitDataSlice.reducer;