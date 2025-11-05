import { createSlice } from '@reduxjs/toolkit'
import { reset } from '../actions'

const songsSlice = createSlice({
    name: 'song',
    //Initial state object
    //songs property with empty array
    initialState: [],
    //Mega reducer to combine all reducers
    //This is loaded into our store
    reducers: {
        //like a case switch
        //use immer to update date
        //That is why push is allowed
        //NOT BIG STATE OBJECT STATE MANAGED BY STORE!
        //STATE MANAGED BY REDUCER
        addSong(state, action) { 
            //console.log(state.length)
            state.push(action.payload)
        },
        removeSong(state, action) {
            //action.payload === string we want to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1)
        }
    },
    extraReducers(builder) {
        //action creator
        builder.addCase(reset, (state, action) => {
            //rest state with an empty array
            return [];
        })
    }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
