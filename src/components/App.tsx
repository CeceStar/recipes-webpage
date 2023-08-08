import { useState, useEffect } from "react";
import "../assets/styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./Mainpage/mainpage";
import AllRecipesPage from "./AllRecipesPage/AllRecipes";
import { OneRecipe } from "myTypes";
import NotFound from "./404";
import SingleRecipe from "./SingleRecipePage/single-recipe";
import ScrollToTop from "./ScrollToTop";
import requestAllRecepies from "../requestAllRecipes";

function App() {
  let [recipeData, setRecipeData] = useState<OneRecipe[] | null>(null);

  useEffect(() => {
    (async () => {
      const allreq = await requestAllRecepies();
      setRecipeData(allreq);
    })();
  }, [setRecipeData]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/recipes">
          <ScrollToTop />
          <AllRecipesPage fetchedRecipeData={recipeData} />
        </Route>
        <Route path="/recipes/:slug">
          <ScrollToTop />
          <SingleRecipe fetchedRecipeData={recipeData} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
