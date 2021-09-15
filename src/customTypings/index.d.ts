declare module "myTypes" {
  type imageFromContentfull = {
    title: string;
    url: string;
    width: number;
    height: number;
  };

  interface oneRecipe {
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
}

module.exports = {
  imageFromContentfull,
  oneRecipe,
};
