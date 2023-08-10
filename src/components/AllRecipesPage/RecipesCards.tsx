import { OneRecipe } from "myTypes";
import { Link } from "react-router-dom";

export default function RecipesCards(props: { recipesToShow: OneRecipe[] }) {
  return (
    <>
      {props.recipesToShow.map((recipe) => {
        return (
          <div key={recipe.slug} className="small-card-container">
            <h3 className="title-card-style">{recipe.title}</h3>
            <p>{recipe.introText}</p>
            <div className="view-recipe-btn-container">
              <Link to={`/recipes/${recipe.slug}`}>
                <button className="btn recipe-btn">View Recipe</button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
