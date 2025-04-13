interface Image {
  url: string;
}

interface Instruction {
  image: Image;
  text: string;
}

interface Publisher {
  brand: string;
  name: string;
  url: string;
}

interface Nutrition {
  calories: string;
  carbs: string;
  cholesterol: string;
  fat: string;
  saturatedFat: string;
  unsaturatedFat: string;
  fiber: string;
  protein: string;
  sodium: string;
}

export interface Recipe {
  title: string;
  rating: number;
  image: Image;
  ingredients: string[];
  instructions: Instruction[];
  prepTime: string;
  cookTime: string;
  category: string[];
  cuisine: string[];
  nutrition: Nutrition;
  publisher: Publisher;
}
