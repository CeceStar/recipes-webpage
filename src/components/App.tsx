import React from "react";
import "../assets/styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Mainpage/mainpage";
import AllRecipes from "./All-Recipes/allrecipes";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/recipes">
          <AllRecipes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
