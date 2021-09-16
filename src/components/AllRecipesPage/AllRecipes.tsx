import { MouseEvent } from "react";
import { useState } from "react";
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
import RecipesCards from "./RecipesCards";

const AllRecipes = (props: { fetchedRecipeData: OneRecipe[] | null }) => {
  // let [filterActive, setFilterActive] = useState(false);
  // let [clickedFilterName, setclickedFilterName] = useState<string>("");
  let [filteredArray, setFilteredArray] = useState<OneRecipe[] | null>(null);

  function handleClickEvent(e: MouseEvent<HTMLButtonElement>): void {
    if (e.currentTarget.className === "filter-btn") {
      e.currentTarget.className = "clicked-filter-btn";
      let clickedFilter = e.currentTarget.innerHTML;
      console.log(clickedFilter);
      if (props.fetchedRecipeData !== null) {
        const recipesWithChoosenFilter = props.fetchedRecipeData.filter(
          (element) => {
            return element.meal.includes(clickedFilter);
          }
        );
        console.log(recipesWithChoosenFilter);
        setFilteredArray(recipesWithChoosenFilter);
      }
    } else {
      e.currentTarget.className = "filter-btn";
    }
  }

  return (
    <>
      <div className="background-frame-all-recipes">
        <h2>All recipes</h2>
        <Filters
          title="Meal"
          options={mealOptionsArray}
          idWord="meal"
          handleClick={handleClickEvent}
        />
        <Filters
          title="Cooking time"
          options={cookingTimeOptionsArray}
          idWord="time"
          handleClick={handleClickEvent}
        />
        <Filters
          title="Difficulty level"
          options={difficultyLevelOptionsArray}
          idWord="level"
          handleClick={handleClickEvent}
        />
        <Filters
          title="Dietary Restrictions"
          options={dietaryRestrictionsOptionsArray}
          idWord="dietary"
          handleClick={handleClickEvent}
        />
        <Filters
          title="No of Ingredients"
          options={numberOfIngredientsTagOptionsArray}
          idWord="ingredients"
          handleClick={handleClickEvent}
        />
        <Filters
          title="Rating"
          options={ratingOptionsArray}
          idWord="rating"
          handleClick={handleClickEvent}
        />
      </div>
      <RecipesCards
        recipesWithFilter={filteredArray}
        allRecipesWithoutFilter={props.fetchedRecipeData}
      />
    </>
  );
};

export default AllRecipes;
