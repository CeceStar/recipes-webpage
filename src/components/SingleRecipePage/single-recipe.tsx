import { OneRecipe } from "myTypes";

function SingleRecipes(props: { fetchedRecipeData: OneRecipe[] | null }) {
  // let clickedRecipe = props.fetchedRecipeData?.filter((recipe) => {
  //   return recipe.slug === window.location.pathname.substring(8);
  // });
  // console.log(clickedRecipe);
  console.log("hej");
  return (
    <>
      <div className="background-frame">
        <h1>Hello!</h1>
      </div>
    </>
  );
}

export default SingleRecipes;
