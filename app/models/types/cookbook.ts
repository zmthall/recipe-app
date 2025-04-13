import type { Recipe } from "./recipe";

interface Section {
  id: string;
  type: string;
  recipes: Recipe[];
}

export interface CookBook {
  id: string;
  userId: string;
  title: string;
  description: string;
  sections: Section[];
}