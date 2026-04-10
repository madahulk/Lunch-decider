import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  Utensils, 
  Beef, 
  Bird, 
  Fish, 
  Leaf, 
  Pizza, 
  Coffee, 
  Cake,
  ArrowLeft,
  ArrowRight,
  X
} from 'lucide-react';
import { meals } from './data/meals';
import { Category, Cuisine, Meal } from './types';

type View = 'home' | 'category' | 'cuisine' | 'list' | 'recipe';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('ar');
  const [view, setView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedCuisine, setSelectedCuisine] = useState<Cuisine | null>(null);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const t = {
    homeTitle: isRTL ? 'هنتغدا ايه النهارده؟' : 'What should we eat today?',
    letsGo: isRTL ? 'هيا بنا' : "Let's go",
    food: isRTL ? 'طعام' : 'Food',
    egyptian: isRTL ? 'أكلات مصرية' : 'Egyptian Food',
    saudi: isRTL ? 'أكلات سعودية' : 'Saudi Food',
    search: isRTL ? 'بحث عن وجبة...' : 'Search for a meal...',
    ingredients: isRTL ? 'المكونات' : 'Ingredients',
    steps: isRTL ? 'طريقة التحضير' : 'Cooking Method',
    back: isRTL ? 'رجوع' : 'Back',
    categories: {
      All: isRTL ? 'الكل' : 'All',
      Meat: isRTL ? 'لحوم' : 'Meat',
      Chicken: isRTL ? 'فراخ' : 'Chicken',
      Fish: isRTL ? 'سمك' : 'Fish',
      Vegetarian: isRTL ? 'نباتي' : 'Vegetarian',
      Pasta: isRTL ? 'مكرونات' : 'Pasta',
      'Light Meals': isRTL ? 'أكلات خفيفة' : 'Light Meals',
      Desserts: isRTL ? 'حلويات' : 'Desserts',
    }
  };

  const filteredMeals = useMemo(() => {
    return meals.filter(meal => {
      const matchesCuisine = !selectedCuisine || meal.cuisine === selectedCuisine;
      const matchesCategory = selectedCategory === 'All' || meal.category === selectedCategory;
      const matchesSearch = meal.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          meal.description[lang].toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCuisine && matchesCategory && matchesSearch;
    });
  }, [selectedCuisine, selectedCategory, searchQuery, lang]);

  const handleMealClick = (meal: Meal) => {
    setSelectedMeal(meal);
    setView('recipe');
  };

  const reset = () => {
    setView('home');
    setSelectedCategory('All');
    setSelectedCuisine(null);
    setSelectedMeal(null);
    setSearchQuery('');
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${isRTL ? 'font-arabic' : 'font-english'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 bg-vibrant-red z-[-2]" />
      <div className="bg-streak" />
      
      {/* Floating Icons */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
        <Bird className="absolute top-10 left-10 w-12 h-12 text-white animate-float" />
        <Leaf className="absolute top-1/4 right-20 w-16 h-16 text-white animate-float-delayed" />
        <Pizza className="absolute bottom-20 left-1/4 w-14 h-14 text-white animate-float-slow" />
        <Fish className="absolute bottom-1/3 right-10 w-12 h-12 text-white animate-float" />
        <Utensils className="absolute top-1/2 left-10 w-10 h-10 text-white animate-float-delayed" />
      </div>

      {/* Language Toggle */}
      <button 
        onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
        className="fixed top-6 left-6 z-50 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 flex items-center gap-2 border border-white/30 shadow-lg"
      >
        <Globe size={20} />
        <span className="text-sm font-bold uppercase">{lang === 'en' ? 'AR' : 'EN'}</span>
      </button>

      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div 
            key="home"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="flex flex-col items-center justify-center min-h-screen p-6 text-center"
          >
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl font-bold text-white mb-12 drop-shadow-2xl"
            >
              {t.homeTitle}
            </motion.h1>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#333' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setView('category')}
              className="bg-white text-vibrant-red px-12 py-4 rounded-full text-xl md:text-2xl font-bold shadow-2xl transition-colors duration-300 flex items-center gap-3"
            >
              {t.letsGo}
              {isRTL ? <ChevronLeft size={28} /> : <ChevronRight size={28} />}
            </motion.button>
          </motion.div>
        )}

        {view === 'category' && (
          <motion.div 
            key="category"
            initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? 100 : -100 }}
            className="flex flex-col items-center justify-center min-h-screen p-6"
          >
            <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border-4 border-white p-8 rounded-[2rem] shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center uppercase tracking-widest">
                {t.food}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(Object.keys(t.categories) as Category[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setView('cuisine');
                    }}
                    className="group relative overflow-hidden bg-white hover:bg-gray-800 text-vibrant-red hover:text-white p-6 transition-all duration-300 transform skew-x-[-12deg] rounded-lg shadow-lg border-2 border-transparent hover:border-white"
                  >
                    <div className="flex items-center justify-between skew-x-[12deg]">
                      <span className="text-xl font-bold">{t.categories[cat]}</span>
                      <div className="p-2 bg-vibrant-red/10 group-hover:bg-white/20 rounded-full">
                        {cat === 'Meat' && <Beef size={24} />}
                        {cat === 'Chicken' && <Bird size={24} />}
                        {cat === 'Fish' && <Fish size={24} />}
                        {cat === 'Vegetarian' && <Leaf size={24} />}
                        {cat === 'Pasta' && <Pizza size={24} />}
                        {cat === 'Light Meals' && <Coffee size={24} />}
                        {cat === 'Desserts' && <Cake size={24} />}
                        {cat === 'All' && <Utensils size={24} />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {view === 'cuisine' && (
          <motion.div 
            key="cuisine"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="flex flex-col items-center justify-center min-h-screen p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <CuisineCard 
                title={t.egyptian}
                image="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800"
                onClick={() => {
                  setSelectedCuisine('Egyptian');
                  setView('list');
                }}
              />
              <CuisineCard 
                title={t.saudi}
                image="https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=800"
                onClick={() => {
                  setSelectedCuisine('Saudi');
                  setView('list');
                }}
              />
            </div>
            <button 
              onClick={() => setView('category')}
              className="mt-12 text-white flex items-center gap-2 hover:underline font-bold text-lg"
            >
              {isRTL ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
              {t.back}
            </button>
          </motion.div>
        )}

        {view === 'list' && (
          <motion.div 
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen p-6 md:p-12"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <button 
                  onClick={() => setView('cuisine')}
                  className="bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-md transition-all"
                >
                  {isRTL ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
                </button>
                
                <div className="relative w-full max-w-xl">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-vibrant-red" size={20} />
                  <input 
                    type="text"
                    placeholder={t.search}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white text-gray-800 pl-12 pr-6 py-4 rounded-full shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50 text-lg"
                  />
                </div>

                <div className="hidden md:block w-12" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredMeals.map((meal) => (
                  <MealCard 
                    key={meal.id} 
                    meal={meal} 
                    lang={lang} 
                    onClick={() => handleMealClick(meal)} 
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {view === 'recipe' && selectedMeal && (
          <motion.div 
            key="recipe"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="min-h-screen p-4 md:p-12 flex items-center justify-center"
          >
            <div className="bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
              <button 
                onClick={() => setView('list')}
                className="absolute top-6 right-6 z-10 bg-black/50 hover:bg-black text-white p-3 rounded-full transition-all"
              >
                <X size={24} />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={selectedMeal.image} 
                  alt={selectedMeal.name[lang]} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[80vh]">
                <h2 className="text-4xl font-bold text-vibrant-red mb-4">{selectedMeal.name[lang]}</h2>
                <p className="text-gray-600 text-lg mb-8">{selectedMeal.description[lang]}</p>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Utensils className="text-vibrant-red" size={24} />
                    {t.ingredients}
                  </h3>
                  <ul className="space-y-2">
                    {selectedMeal.ingredients[lang].map((ing, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-vibrant-red rounded-full" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Coffee className="text-vibrant-red" size={24} />
                    {t.steps}
                  </h3>
                  <ol className="space-y-4">
                    {selectedMeal.steps[lang].map((step, i) => (
                      <li key={i} className="flex gap-4 text-gray-700">
                        <span className="font-bold text-vibrant-red text-xl">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CuisineCard({ title, image, onClick }: { title: string, image: string, onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center p-8">
        <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">{title}</span>
      </div>
    </motion.button>
  );
}

function MealCard({ meal, lang, onClick }: { meal: Meal, lang: 'en' | 'ar', onClick: () => void, key?: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="bg-white rounded-[2rem] overflow-hidden shadow-xl cursor-pointer group border-2 border-transparent hover:border-white transition-all"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={meal.image} 
          alt={meal.name[lang]} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-vibrant-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          {meal.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-vibrant-red transition-colors">
          {meal.name[lang]}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2">
          {meal.description[lang]}
        </p>
      </div>
    </motion.div>
  );
}
