import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlayList";
import "./App.css";


export default function App() {
  const handleResetClick = () => {
    //
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}

