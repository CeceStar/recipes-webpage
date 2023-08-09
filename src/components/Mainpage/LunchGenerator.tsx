import { OneRecipe } from "myTypes";
import { useState } from "react";
import RecipesCards from "../AllRecipesPage/RecipesCards";

export default function Lunchgenerator(props: {
  fetchedRecipeData: OneRecipe[];
}) {
  const [recipeToSuggest, setRecipeToSuggest] = useState<OneRecipe | null>(
    null
  );

  const options = props.fetchedRecipeData.filter((recipe) => {
    return recipe.meal.includes("Lunch");
  });

  function generateSuggestion() {
    if (recipeToSuggest !== null) {
      const otherOptions = options.filter((recipe) => {
        return recipe !== recipeToSuggest;
      });
      console.log(otherOptions);
      const noOfOpptionsAvailable = otherOptions.length;
      const randomNumber = Math.floor(Math.random() * noOfOpptionsAvailable);
      setRecipeToSuggest(otherOptions[randomNumber]);
    } else {
      const noOfOpptionsAvailable = options.length;
      const randomNumber = Math.floor(Math.random() * noOfOpptionsAvailable);
      setRecipeToSuggest(options[randomNumber]);
    }
  }

  return (
    <div className="generator-container">
      <h2>Lunchgenerator</h2>
      <p>What to eat today? Hit the button and get a suggestion!</p>
      <div className="btn-and-suggestion-container">
        {recipeToSuggest && <RecipesCards recipesToShow={[recipeToSuggest]} />}
        <button className="btn generate-btn" onClick={generateSuggestion}>
          Generate
        </button>
      </div>
    </div>
  );
}
