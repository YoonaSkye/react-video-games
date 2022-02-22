import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { loadGames } from "./actions/gamesAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);
  return <div className="App">New App!</div>;
}

export default App;
