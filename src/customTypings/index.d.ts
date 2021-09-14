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
    image: imageFromContentfull;
    rating: number;
    cookingTime: string;
    totalNumberOfIngredients: number;
    listOfIngredients: string[];
    directions: string;
    urlToRecipe?: string;
    tags: string[];
  }

}

module.exports = {
  imageFromContentfull,
  oneRecipe,
};
