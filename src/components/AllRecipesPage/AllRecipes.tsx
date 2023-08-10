import { MouseEvent, useEffect } from "react";
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
  const [filteredArray, setFilteredArray] = useState<OneRecipe[] | null>(null);
  const [recipesToShow, setRecipesToShow] = useState<OneRecipe[] | null>(
    props.fetchedRecipeData
  );
  const [showFilterOptions, setShowFilterOptions] = useState(true);

  useEffect(() => {
    if (filteredArray === null || filteredArray?.length === 0) {
      setRecipesToShow(props.fetchedRecipeData);
    } else {
      setRecipesToShow(filteredArray);
    }
  }, [filteredArray, props.fetchedRecipeData]);

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
        } else if (clickedFilterType === "cookingTime") {
          recipesWithChoosenFilter = props.fetchedRecipeData.filter(
            (element) => {
              return element.cookingTime === clickedFilter;
            }
          );
          setFilteredArray(recipesWithChoosenFilter);
        } else if (clickedFilterType === "difficultyLevel") {
          recipesWithChoosenFilter = props.fetchedRecipeData.filter(
            (element) => {
              return element.difficultyLevel === clickedFilter;
            }
          );
          setFilteredArray(recipesWithChoosenFilter);
        } else if (clickedFilterType === "dietaryRestrictions") {
          recipesWithChoosenFilter = props.fetchedRecipeData.filter(
            (element) => {
              return element.dietaryRestrictions.includes(clickedFilter);
            }
          );
          setFilteredArray(recipesWithChoosenFilter);
        } else if (clickedFilterType === "numberOfIngredientsTag") {
          recipesWithChoosenFilter = props.fetchedRecipeData.filter(
            (element) => {
              return element.numberOfIngredientsTag === clickedFilter;
            }
          );
          setFilteredArray(recipesWithChoosenFilter);
        } else if (clickedFilterType === "ratingTag") {
          recipesWithChoosenFilter = props.fetchedRecipeData.filter(
            (element) => {
              return element.ratingTag === clickedFilter;
            }
          );
          setFilteredArray(recipesWithChoosenFilter);
        } else if (clickedFilterType === "all") {
          setFilteredArray(props.fetchedRecipeData);
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
              title="Occation"
              options={mealOptionsArray}
              idWord="meal"
              handleClick={handleClickEvent}
            />
            <Filters
              title="Cooking time"
              options={cookingTimeOptionsArray}
              idWord="cookingTime"
              handleClick={handleClickEvent}
            />
            <Filters
              title="Difficulty level"
              options={difficultyLevelOptionsArray}
              idWord="difficultyLevel"
              handleClick={handleClickEvent}
            />
            <Filters
              title="Dietary Restrictions"
              options={dietaryRestrictionsOptionsArray}
              idWord="dietaryRestrictions"
              handleClick={handleClickEvent}
            />
            <Filters
              title="No of Ingredients"
              options={numberOfIngredientsTagOptionsArray}
              idWord="numberOfIngredientsTag"
              handleClick={handleClickEvent}
            />
            <Filters
              title="Rating"
              options={ratingOptionsArray}
              idWord="ratingTag"
              handleClick={handleClickEvent}
            />
            <Filters
              title=""
              options={["Show all"]}
              idWord="all"
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
        <div className="cards-container">
          {filteredArray?.length === 0 && (
            <h2>
              Sorry, no recipes found with this filter, have a look at our
              others!
            </h2>
          )}
          {recipesToShow && <RecipesCards recipesToShow={recipesToShow} />}
        </div>
      </div>
    </>
  );
};

export default AllRecipes;
