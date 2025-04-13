<template>
  <div>
    <form @submit.prevent="getRecipe">
      <input type="text" name="url" id="url" v-model="url" />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import type { Recipe } from "../../models/types/recipe.js";

const recipes = useRecipes()

const url = ref<string>("");

const localRecipe = ref<Recipe>({
  title: "",
  image: {
    url: ''
  },
  ingredients: [],
  instructions: [],
  prepTime: "",
  cookTime: "",
  category: [],
  cuisine: [],
  nutrition: {
    calories: "",
    carbs: "",
    cholesterol: "",
    fat: "",
    saturatedFat: "",
    unsaturatedFat: "",
    fiber: "",
    protein: "",
    sodium: "",
  },
  publisher: {
    brand: "",
    name: "",
    url: "",
  },
});

const getRecipe = () => {
  recipes.scrapeRecipe(url.value, localRecipe)
}

</script>

<style></style>
