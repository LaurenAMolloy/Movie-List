import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong  } from './slices/songSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/movieSlice';
import { reset } from './actions';

const store = configureStore({
    reducer: {
        //makes a key in our store
        //value is created by reducer
        //This wraps up all the reducing functions
        //Stops us from writing out all the boilerplate in useReducer
        songs: songsReducer,
        movies: moviesReducer
    }
});

//returns an action object
//When called you get an action object to dispatch
//used to run reducers
//We can add the payload as an argument
//console.log(songsSlice.actions.addSong())

// //get state out of the store
// const startingState = store.getState();
// //see state as plain text
// //console.log(JSON.stringify(startingState))

// store.dispatch(
//     //This action type matches the reducer 
//     // 'song' + '/' + 'addSong' = 'song/addSong'
//     // type: 'song/addSong',
//     // payload: 'New Song!!'
//     songsSlice.actions.addSong('Some song')
// );


//named export
//action creator
export { store, reset, addSong, removeSong, addMovie, removeMovie }

//console.log(moviesSlice.actions.reset.toString());