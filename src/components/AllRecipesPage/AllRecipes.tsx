import React from "react";
import Filters from "./Filters";
import { OneRecipe } from "myTypes";
import {
  mealOptionsArray,
  cookingTimeOptionsArray,
  difficultyLevelOptionsArray,
  dietaryRestrictionsOptionsArray,
  numberOfIngredientsTagOptionsArray,
  ratingOptionsArray,
} from "./FilterOptionsArray";

const AllRecipes = (props: { fetchedRecipeData: OneRecipe[] | null }) => {
  if (props.fetchedRecipeData !== null) {
    console.log(props.fetchedRecipeData[0].meal);
    const recipesWithHigherRatingThanThree = props.fetchedRecipeData.filter(
      (element, index) => {
        return element.rating > 3;
      }
    );
    console.log(recipesWithHigherRatingThanThree);
  }

  return (
    <>
      <div className="background-frame-all-recipes">
        <h2>All recipes</h2>
        <Filters title="Meal" options={mealOptionsArray} idWord="meal" />
        <Filters
          title="Cooking time"
          options={cookingTimeOptionsArray}
          idWord="time"
        />
        <Filters
          title="Difficulty level"
          options={difficultyLevelOptionsArray}
          idWord="level"
        />
        <Filters
          title="Dietary Restrictions"
          options={dietaryRestrictionsOptionsArray}
          idWord="dietary"
        />
        <Filters
          title="No of Ingredients"
          options={numberOfIngredientsTagOptionsArray}
          idWord="ingredients"
        />
        <Filters title="Rating" options={ratingOptionsArray} idWord="rating" />
      </div>
    </>
  );
};

export default AllRecipes;
