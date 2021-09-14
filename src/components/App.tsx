import React from "react";
import "../assets/styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage/MainPage";
import AllRecipes from "./AllRecipesPage/AllRecipes";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/recipes">
          <AllRecipes />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
