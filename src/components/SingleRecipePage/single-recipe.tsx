import { useEffect } from "react";
import { OneRecipe } from "myTypes";
import { Link } from "react-router-dom";
import showdown from "showdown";
import LikeStamp from "../../assets/images/Like-stamp.png";

function SingleRecipes(props: { fetchedRecipeData: OneRecipe[] | null }) {
  let recipe = props.fetchedRecipeData?.find((recipe) => {
    return recipe.slug === window.location.pathname.substring(9);
  });

  useEffect(() => {
    if (recipe?.directions !== undefined) {
      let htmlDirectionsString = new showdown.Converter().makeHtml(
        recipe?.directions
      );
      // let htmlDirections = document.createRange().createContextualFragment(htmlDirectionsString);
      const placeholder =
        document.getElementsByClassName("display-directions")[0];
      placeholder.innerHTML = htmlDirectionsString;
    }
  }, [recipe?.directions]);

  function wordDependingOnNumber(): string {
    let compare = recipe?.totalNumberOfIngredients;
    if (compare !== undefined && compare > 1) {
      return "ingredients";
    } else {
      return "ingredient";
    }
  }
  let i = 0;

  return (
    <>
      <div className="background-frame-single-recipe">
        <div className="recipe-container">
          <div className="image-container">
            <img
              src={recipe?.image.url}
              className="recipe-image"
              alt="Food on a plate"
            />
            <img
              className="recipe-like"
              src={LikeStamp}
              alt="Drawn hand doing thumps up on a blue background"
            />
          </div>
          <div className="intro-to-recipe-container">
            <h1>{recipe?.title}</h1>
            <p className="intro-text">{recipe?.introText}</p>
            <div className="small-info-icons">
              <span className="info">
                <i className="fas fa-star"></i> {recipe?.rating}
              </span>
              <span className="info">
                <i className="fas fa-clock"></i> {recipe?.cookingTime}
              </span>
              <span className="info">
                <i className="fas fa-shopping-basket"></i>{" "}
                {recipe?.totalNumberOfIngredients} {wordDependingOnNumber()}
              </span>
            </div>
          </div>
          <div className="ingredients-and-howto-box">
            <div className="ingredients">
              <h3>Ingredients</h3>
              <ul>
                {recipe?.listOfIngredients.map((ingredient) => {
                  i++;
                  return <li key={`ing${i}`}>{ingredient}</li>;
                })}
              </ul>
            </div>
            <div className="directions">
              <h3>Directions</h3>
              <p className="display-directions"></p>
            </div>
          </div>
          <p className="link-to-url">
            Recipe and picture is collected from{" "}
            <a href={recipe?.urlToRecipe}>here</a>.
          </p>
          <div className="button-back-container">
            <Link to="/recipes">
              <button className="btn">View all recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleRecipes;
