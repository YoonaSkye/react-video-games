import "./App.css";
// pages && components
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

// router
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Route path={["game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
