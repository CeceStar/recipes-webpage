import React from "react";
import Filters from "./filters";

function AllRecipes() {
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
}

export default AllRecipes;
