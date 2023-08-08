import { OneRecipe } from "myTypes";

export default async function requestAllRecepies() {
  let recipeData: OneRecipe[] | null = null;

  const query = `
    {
      recipeCollection{
        items{
          title,
          slug,
          introText,
          image {
            title,
            url,
            width,
            height
          }
          listOfIngredients,
          directions,
          urlToRecipe,
          meal,
          cookingTime,
          difficultyLevel,
          dietaryRestrictions,
          totalNumberOfIngredients,
          numberOfIngredientsTag,  
          rating, 
          ratingTag,
          sys{
            publishedAt
          }
        }
      }
    }
      `;

  await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  )
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      }
      recipeData = data.recipeCollection.items;
    });

  return recipeData;
}
