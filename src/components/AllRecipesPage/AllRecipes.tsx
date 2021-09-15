import React from "react";
import Filters from "./Filters";
import { oneRecipe } from "myTypes";

const AllRecipes = (props: { fetchedRecipeData: oneRecipe[] | null }) => {
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
        <Filters title="Måltid" id={234} />
        <Filters title="Tillagningstid" id={235} />
        <Filters title="Svårighetsgrad" id={236} />
        <Filters title="Specialkost" id={237} />
      </div>
    </>
  );
};

export default AllRecipes;
