import { RootState } from '../index';
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { allPosts } from './defaulValuesStore';

export interface IImage {
    dataURL: string,
}

export interface IAllPosts {
    type: string,
    postId: string,
    authorId: string,
    authorName: string,
    title: string,
    mainImage: IImage[],
    content: string,
    date: string,
    additionalImages: IImage[]
}

const newsSlice = createSlice({
    name: "posts",
    initialState: allPosts as IAllPosts[],
    reducers: {
        addNewness(state, action) {
            return[
                ...state,
                {
                ...action.payload,
                postId: uuidv4(),
                date: new Date().toLocaleDateString()
                }
            ];
        },
        deleteNewness(state, action){
            return[...state.filter(element => element.postId !== action.payload)];
        },
        editNewness(state, action){
            return[
                ...state.map(element => {
                    if(element.postId === action.payload.postId){
                        return action.payload;
                    }
                    return element;
                })
            ];
        }
    }
})

export const { addNewness, deleteNewness, editNewness} = newsSlice.actions;

export const getAllPosts = (state: RootState) => state.posts;

export const getCategoryOptions = (state: RootState) => state.posts.reduce((container, obj) => {
  if (container.includes(obj.type)) {
    return [...container];
  }
  else {
    return [...container, obj.type];
  }
}, []);




export const postsReducer = newsSlice.reducer;