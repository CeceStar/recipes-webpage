import { FilteredRecipes } from "myTypes";
import { Link } from "react-router-dom";

export default function RecipesCards(props: FilteredRecipes) {
  let renderThisArrayOfRecipes;
  if (props.recipesWithFilter?.length === 0) {
    renderThisArrayOfRecipes = props.allRecipesWithoutFilter;
  } else {
    renderThisArrayOfRecipes = props.recipesWithFilter;
  }

  return (
    <>
      <div className="cards-container">
        {props.recipesWithFilter?.length === 0 ? (
          <h2>
            Sorry, no recipes found with this filter, have a look at our others!
          </h2>
        ) : (
          ""
        )}
        {renderThisArrayOfRecipes?.map((recipe) => {
          return (
            <div key={recipe.slug} className="small-card-container">
              <h3 className="title-card-style">{recipe.title}</h3>
              <p>{recipe.introText}</p>
              <Link to={`/recipes/${recipe.slug}`}>
                <button className="btn recipe-btn">View Recipe</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
