import { useState, useEffect } from "react";
import "../assets/styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./Mainpage/Mainpage";
import AllRecipesPage from "./AllRecipesPage/AllRecipes";
import { OneRecipe } from "myTypes";
import NotFound from "./404";
import SingleRecipe from "./SingleRecipePage/single-recipe";
import ScrollToTop from "./ScrollToTop";

function App() {
  const query = `
  {
    recipeCollection{
      items{
        title,
        slug,
        introText,
        image {
          title,
          url,
          width,
          height
        }
        listOfIngredients,
        directions,
        urlToRecipe,
        meal,
        cookingTime,
        difficultyLevel,
        dietaryRestrictions,
        totalNumberOfIngredients,
        numberOfIngredientsTag,  
        rating, 
        ratingTag,
        sys{
          publishedAt
        }
      }
    }
  }
    `;

  let [recipeData, setRecipeData] = useState<OneRecipe[] | null>(null);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setRecipeData(data.recipeCollection.items);
      });
  }, [query, setRecipeData]);

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
