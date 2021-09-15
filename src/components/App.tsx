import { useState, useEffect } from "react";
import "../assets/styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage/Mainpage";
import AllRecipesPage from "./AllRecipesPage/AllRecipes";
import { oneRecipe } from "myTypes";

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
        totalNumberOfIngredients,
        numberOfIngredientsTag,  
        rating, 
      }
    }
  }
    `;

  let [recipeData, setRecipeData] = useState<oneRecipe[] | null>(null);

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
        <Route path="/recipes">
          <AllRecipesPage fetchedRecipeData={recipeData} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
