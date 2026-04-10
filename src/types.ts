export type Category = 'All' | 'Meat' | 'Chicken' | 'Fish' | 'Vegetarian' | 'Pasta' | 'Light Meals' | 'Desserts';
export type Cuisine = 'Egyptian' | 'Saudi';

export interface Meal {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  image: string;
  category: Category;
  cuisine: Cuisine;
  ingredients: {
    en: string[];
    ar: string[];
  };
  steps: {
    en: string[];
    ar: string[];
  };
}
