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
  let [filteredArray, setFilteredArray] = useState<OneRecipe[] | null>(null);
  let [showFilterOptions, setShowFilterOptions] = useState(false);

  function handleClickEvent(e: MouseEvent<HTMLButtonElement>): void {
    if (e.currentTarget.className === "filter-btn") {
      e.currentTarget.className = "clicked-filter-btn";
      let clickedFilterType = e.currentTarget.id;
      let clickedFilter = e.currentTarget.innerHTML;
      let recipesWithChoosenFilter;
      if (props.fetchedRecipeData !== null) {
        if (clickedFilterType === "meal") {
          recipesWithChoosenFilter = props.fetchedRecipeData.filter(
            (element) => {
              return element.meal.includes(clickedFilter);
            }
          );
          setFilteredArray(recipesWithChoosenFilter);
        } else if (clickedFilterType === "time") {
          recipesWithChoosenFilter = props.fetchedRecipeData.filter(
            (element) => {
              return element.cookingTime.includes(clickedFilter);
            }
          );
          setFilteredArray(recipesWithChoosenFilter);
        } else if (clickedFilterType === "level") {
          recipesWithChoosenFilter = props.fetchedRecipeData.filter(
            (element) => {
              return element.difficultyLevel.includes(clickedFilter);
            }
          );
          setFilteredArray(recipesWithChoosenFilter);
        } else if (clickedFilterType === "dietary") {
          recipesWithChoosenFilter = props.fetchedRecipeData.filter(
            (element) => {
              return element.dietaryRestrictions.includes(clickedFilter);
            }
          );
          setFilteredArray(recipesWithChoosenFilter);
        } else if (clickedFilterType === "ingredients") {
          recipesWithChoosenFilter = props.fetchedRecipeData.filter(
            (element) => {
              return element.numberOfIngredientsTag.includes(clickedFilter);
            }
          );
          setFilteredArray(recipesWithChoosenFilter);
        } else if (clickedFilterType === "rating") {
          recipesWithChoosenFilter = props.fetchedRecipeData.filter(
            (element) => {
              return element.ratingTag.includes(clickedFilter);
            }
          );
          setFilteredArray(recipesWithChoosenFilter);
        }
      }
    } else {
      e.currentTarget.className = "filter-btn";
    }
  }

  return (
    <>
      <div className="background-frame-all-recipes">
        <h2>All recipes</h2>
        <div className="button-and-filters-div">
          <button
            className="btn show-filters-btn"
            onClick={() => {
              setShowFilterOptions(!showFilterOptions);
            }}
          >
            {showFilterOptions ? "Hide filters" : "Show filters"}
          </button>
          <div className={showFilterOptions ? "" : "hidden"}>
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
            <button
              className="btn show-filters-btn"
              onClick={() => {
                setShowFilterOptions(!showFilterOptions);
              }}
            >
              {showFilterOptions ? "Hide filters" : "Show filters"}
            </button>
          </div>
        </div>
        <RecipesCards
          recipesWithFilter={filteredArray}
          allRecipesWithoutFilter={props.fetchedRecipeData}
        />
      </div>
    </>
  );
};

export default AllRecipes;
