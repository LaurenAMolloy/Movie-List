import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        }
    }
})

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
            console.log(state.length)
            state.push(action.payload)
        },
        removeSong(state, action) {
            //action.payload === string we want to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1)
        }
    }
});

const store = configureStore({
    reducer: {
        //makes a key in our store
        //value is created by reducer
        //This wraps up all the reducing functions
        //Stops us from writing out all the boilerplate in useReducer
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
});

//returns an action object
//When called you get an action object to dispatch
//used to run reducers
//We can add the payload as an argument
//console.log(songsSlice.actions.addSong())

//get state out of the store
const startingState = store.getState();
//see state as plain text
console.log(JSON.stringify(startingState))

store.dispatch(
    //This action type matches the reducer 
    // 'song' + '/' + 'addSong' = 'song/addSong'
    // type: 'song/addSong',
    // payload: 'New Song!!'
    songsSlice.actions.addSong('Some song')
);

//log the updated state
// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

//named export
export const { addSong, removeSong } = songsSlice.actions
export const { addMovie, removeMovie } = moviesSlice.actions
export { store };
