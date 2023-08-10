import { OneRecipe } from "myTypes";
import Lunchgenerator from "./LunchGenerator";
import Hero from "./hero";

function MainPage(props: { fetchedRecipeData: OneRecipe[] | null }) {
  return (
    <>
      <div className="background-frame">
        <Hero />
        {props.fetchedRecipeData && (
          <Lunchgenerator fetchedRecipeData={props.fetchedRecipeData} />
        )}
      </div>
    </>
  );
}

export default MainPage;
