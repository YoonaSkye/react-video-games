import "./App.css";
// pages && components
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";

// router
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
