import { OneRecipe } from "myTypes";
import { useState } from "react";
import RecipesCards from "../AllRecipesPage/RecipesCards";

export default function Lunchgenerator(props: {
  fetchedRecipeData: OneRecipe[];
}) {
  const [recipeToSuggest, setRecipeToSuggest] = useState<OneRecipe | null>(
    null
  );

  const foodSuitableForLunch = props.fetchedRecipeData.filter((recipe) => {
    return recipe.meal.includes("Lunch");
  });

  function generateSuggestion() {
    let options: OneRecipe[] = foodSuitableForLunch;

    if (recipeToSuggest !== null) {
      const otherOptions = options.filter((recipe) => {
        return recipe !== recipeToSuggest;
      });
      options = otherOptions;
    }
    const randomNumber = Math.floor(Math.random() * options.length);
    setRecipeToSuggest(options[randomNumber]);
  }

  return (
    <div className="generator-container">
      <div className="intro-text-generator">
        <h2>Lunchgenerator</h2>
        <p>What to eat today? Hit the button and get a suggestion!</p>
      </div>
      <div className="btn-and-suggestion-container">
        {recipeToSuggest ? (
          <RecipesCards recipesToShow={[recipeToSuggest]} />
        ) : (
          <div></div>
        )}
        <button className="btn generate-btn" onClick={generateSuggestion}>
          Generate
        </button>
      </div>
    </div>
  );
}
