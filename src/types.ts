export type Category = 'All' | 'Meat' | 'Chicken' | 'Fish' | 'Vegetarian' | 'Pasta' | 'Light Meals' | 'Desserts' | 'Rice' | 'Soup' | 'Breakfast' | 'Bread';
export type Cuisine = 'Egyptian' | 'Saudi';
export type MealType = 'Savory' | 'Sweet';
export type MealTime = 'Breakfast' | 'Lunch';
export type Budget = 'Economic' | 'Regular' | 'Medium';

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
  type?: MealType;
  time?: MealTime;
  budget?: Budget;
  ingredients: {
    en: string[];
    ar: string[];
  };
  steps: {
    en: string[];
    ar: string[];
  };
}
