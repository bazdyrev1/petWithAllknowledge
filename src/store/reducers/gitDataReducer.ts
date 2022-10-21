import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { defaultGitData } from "./defaultValuesStore";
import { RootState }      from "../index";
import { IGitData }       from "./types";

export const fetchGitData = createAsyncThunk(
  'gitData/fetchGitData',
  async (request: string, {rejectWithValue}) => {
    try{
      const response = await fetch(`https://api.github.com/search/users?q=${request}`);
      if (!response.ok){
        throw new Error('Server Error!')
      }
      const data     = await response.json();
      
      return data;
    } catch(error){
      return rejectWithValue(error.message)
    } 
   
  }
)

const gitDataSlice = createSlice({
    name        : "gitData",
    initialState: defaultGitData as IGitData,
    reducers    : {
      addGitData(_, action) {
  
        return { 
           ...action.payload
        }

      }
    },
    /* eslint-disable */
    extraReducers: (builder) => {
      builder.addCase(fetchGitData.pending, (state, action) => {
        state.status = 'loading';
        state.error  = null;
      });
      builder.addCase(fetchGitData.fulfilled, (state, action) => {
        state.status = 'resolved';
        action.payload.items[0]
      });
      builder.addCase(fetchGitData.rejected, (state, action) => {
        state.status = 'rejected';
        state.error  = action.payload
      })
    },
    
})
export const { addGitData } = gitDataSlice.actions;

export const getGitData = (state: RootState) => state.gitData;

export const gitDataReducer = gitDataSlice.reducer;