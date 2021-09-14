import { useState, useEffect } from "react";
import "../assets/styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage/MainPage";
import AllRecipesPage from "./AllRecipesPage/AllRecipes";

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
                rating,
                cookingTime,
                totalNumberOfIngredients,
                listOfIngredients,
                directions,
                urlToRecipe,
                tags
              }
            }
          }
    `;

  let [recipeData, setRecipeData] = useState("Notingh here yet");

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
  console.log(recipeData);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/recipes">
          <AllRecipesPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
