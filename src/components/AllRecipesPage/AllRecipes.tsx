import React from "react";
import Filters from "./Filters";
import { ChildComponentProps } from "myTypes";

const AllRecipes: React.FC<ChildComponentProps> = ({ allRecipes }) => {
  console.log(allRecipes[0].tags);
  const allRatingWithHigherThanThree = allRecipes?.filter((element, index) => {
    return element.rating > 3;
  });

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
