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
    totalNumberOfIngredients: number;
    numberOfIngredientsTag: string;
    rating: number;
  }

  interface RecipeFilters {
    idWord: string;
    title: string;
    options: string[] | number[];
  }
}

module.exports = {
  ImageFromContentfull,
  OneRecipe,
  RecipeFilters,
};
