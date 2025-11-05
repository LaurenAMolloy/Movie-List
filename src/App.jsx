import { useDispatch } from "react-redux";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlayList";
import { reset } from './store'
import "./App.css";


export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset())
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button >
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}

