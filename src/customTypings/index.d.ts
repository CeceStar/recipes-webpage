declare module "myTypes" {
  type ImageFromContentfull = {
    title: string;
    url: string;
    width: number;
    height: number;
  };

  interface OneRecipe {
    title: string;
    slug: string;
    introText?: string;
    image?: imageFromContentfull;
    listOfIngredients: string[];
    directions: string;
    urlToRecipe?: string;
    meal: string[];
    cookingTime: string;
    difficultyLevel: string;
    dietaryRestrictions: string[];
    totalNumberOfIngredients: number;
    numberOfIngredientsTag: string;
    rating: number;
    ratingTag: string;
  }

  interface RecipeFilters {
    idWord: string;
    title: string;
    options: string[] | number[];
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
  }

  interface FilteredRecipes {
    recipesWithFilter: OneRecipe[] | null;
    allRecipesWithoutFilter: OneRecipe[] | null;
  }
}

module.exports = {
  ImageFromContentfull,
  OneRecipe,
  RecipeFilters,
};
