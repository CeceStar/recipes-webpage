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
import shuffleArray from "../../shuffleArray";

const AllRecipes = (props: { fetchedRecipeData: OneRecipe[] | null }) => {
  const [filteredArray, setFilteredArray] = useState<OneRecipe[] | null>(null);
  const [recipesToShow, setRecipesToShow] = useState<OneRecipe[] | null>(
    props.fetchedRecipeData
  );
  const [showFilterOptions, setShowFilterOptions] = useState(true);

  useEffect(() => {
    if (filteredArray === null || filteredArray?.length === 0) {
      if (props.fetchedRecipeData !== null) {
        setRecipesToShow(shuffleArray(props.fetchedRecipeData));
      }
    } else {
      setRecipesToShow(filteredArray);
    }
  }, [filteredArray, props.fetchedRecipeData]);

  function filterAndSet(clickedFilterType: string, clickedFilter: string) {
    if (props.fetchedRecipeData !== null) {
      if (clickedFilterType === "all") {
        setFilteredArray(shuffleArray(props.fetchedRecipeData));
      } else {
        setFilteredArray(
          shuffleArray(
            props.fetchedRecipeData.filter((element: any) => {
              if (Array.isArray(element[clickedFilterType])) {
                return element[clickedFilterType].includes(clickedFilter);
              } else {
                console.log(element[clickedFilterType]);
                return element[clickedFilterType] === clickedFilter;
              }
            })
          )
        );
      }
    }
  }

  function handleClickEvent(e: MouseEvent<HTMLButtonElement>): void {
    if (e.currentTarget.className === "filter-btn") {
      e.currentTarget.className = "clicked-filter-btn";
      const clickedFilterType = e.currentTarget.id;
      const clickedFilter = e.currentTarget.innerHTML;

      filterAndSet(clickedFilterType, clickedFilter);
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
