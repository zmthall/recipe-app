import type { Recipe } from "~/models/types/recipe";

export const useRecipes = () => {
  const scrapeRecipe = async (url: string, localRecipe: Ref<Recipe>) => {
      const { status, data } = await useFetch("/api/scrape-json-ld", {
        method: "GET",
        params: {
          url: url,
        },
      });
      const dataJSON = data.value;

      console.log(dataJSON)
      localRecipe.value = {
        title: dataJSON.name,
        image: dataJSON.image,
        ingredients: dataJSON.recipeIngredient,
        instructions: dataJSON.recipeInstructions,
        prepTime: dataJSON.prepTime,
        cookTime: dataJSON.cookTime,
        category: dataJSON.recipeCategory,
        cuisine: dataJSON.recipeCuisine,
        nutrition: dataJSON.nutrition,
        publisher: dataJSON.publisher,
      };
  }
return {scrapeRecipe}
}
