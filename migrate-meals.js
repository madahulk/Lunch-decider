import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/meals.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Simple heuristic to add properties to the meals
// This is a one-time migration script

const meals = [
  { id: 'eg-1', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-2', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'eg-3', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'eg-4', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'eg-5', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'eg-6', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'eg-7', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-8', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-9', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-10', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-11', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-12', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-13', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-14', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-15', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-16', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-17', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-18', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-19', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'eg-20', type: 'Savory', time: 'Lunch', budget: 'Economic' },
  { id: 'sa-1', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-2', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-3', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-4', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-5', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-6', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-7', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-8', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-9', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-10', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-11', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-12', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-13', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-14', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-15', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-16', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-17', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-18', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-19', type: 'Savory', time: 'Lunch', budget: 'Regular' },
  { id: 'sa-20', type: 'Savory', time: 'Lunch', budget: 'Regular' },
];

// Add some Breakfast and Dessert items
const extraMeals = `
  {
    id: 'eg-br-1',
    name: { en: 'Ful Medames', ar: 'فول مدمس' },
    description: { en: 'Slow-cooked fava beans with oil and spices.', ar: 'فول مدمس مطهو ببطء مع الزيت والبهارات.' },
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800',
    category: 'Breakfast',
    cuisine: 'Egyptian',
    type: 'Savory',
    time: 'Breakfast',
    budget: 'Economic',
    ingredients: { en: ['Fava beans', 'Oil', 'Cumin'], ar: ['فول', 'زيت', 'كمون'] },
    steps: { en: ['Mash beans', 'Add oil and spices'], ar: ['اهرس الفول', 'أضف الزيت والبهارات'] }
  },
  {
    id: 'eg-de-1',
    name: { en: 'Om Ali', ar: 'أم علي' },
    description: { en: 'Bread pudding with milk and nuts.', ar: 'حلوى أم علي بالحليب والمكسرات.' },
    image: 'https://images.unsplash.com/photo-1589113103503-49675c888c52?auto=format&fit=crop&q=80&w=800',
    category: 'Desserts',
    cuisine: 'Egyptian',
    type: 'Sweet',
    budget: 'Medium',
    ingredients: { en: ['Pastry', 'Milk', 'Nuts'], ar: ['رقائق عجين', 'حليب', 'مكسرات'] },
    steps: { en: ['Mix ingredients', 'Bake'], ar: ['اخلط المكونات', 'ادخلها الفرن'] }
  },
  {
    id: 'sa-br-1',
    name: { en: 'Shakshuka', ar: 'شكشوكة' },
    description: { en: 'Eggs poached in a sauce of tomatoes and peppers.', ar: 'بيض مطبوخ في صلصة طماطم وفلفل.' },
    image: 'https://images.unsplash.com/photo-1590412200988-a436bb7050a8?auto=format&fit=crop&q=80&w=800',
    category: 'Breakfast',
    cuisine: 'Saudi',
    type: 'Savory',
    time: 'Breakfast',
    budget: 'Economic',
    ingredients: { en: ['Eggs', 'Tomatoes', 'Peppers'], ar: ['بيض', 'طماطم', 'فلفل'] },
    steps: { en: ['Sauté vegetables', 'Add eggs'], ar: ['شوح الخضار', 'أضف البيض'] }
  },
  {
    id: 'sa-de-1',
    name: { en: 'Masoub', ar: 'معصوب' },
    description: { en: 'Banana and bread pudding with honey.', ar: 'حلوى الموز والخبز بالعسل.' },
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=800',
    category: 'Desserts',
    cuisine: 'Saudi',
    type: 'Sweet',
    budget: 'Medium',
    ingredients: { en: ['Bananas', 'Bread', 'Honey'], ar: ['موز', 'خبز', 'عسل'] },
    steps: { en: ['Mash bananas', 'Mix with bread'], ar: ['اهرس الموز', 'اخلطه مع الخبز'] }
  }
`;

// Inject properties into existing meals
meals.forEach(m => {
  const regex = new RegExp(`id: '${m.id}',`, 'g');
  content = content.replace(regex, `id: '${m.id}',\n    type: '${m.type}',\n    time: '${m.time}',\n    budget: '${m.budget}',`);
});

// Append extra meals before the closing bracket
content = content.replace(/\];/, `${extraMeals}\n];`);

fs.writeFileSync(filePath, content);
console.log('Meals updated successfully');
