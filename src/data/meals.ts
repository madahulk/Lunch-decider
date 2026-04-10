import { Meal } from '../types';

export const meals: Meal[] = [
  // --- EGYPTIAN MEALS ---
  {
    id: 'eg-1',
    name: { en: 'Koshary', ar: 'كوشري' },
    description: { en: 'The national dish of Egypt, a mix of pasta, rice, lentils, and chickpeas.', ar: 'الطبق الوطني المصري، مزيج من المكرونة والأرز والعدس والحمص.' },
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800',
    category: 'Pasta',
    cuisine: 'Egyptian',
    type: 'Savory',
    time: 'Lunch',
    budget: 'Economic',
    ingredients: {
      en: ['Rice', 'Lentils', 'Macaroni', 'Chickpeas', 'Tomato sauce', 'Fried onions', 'Garlic vinegar'],
      ar: ['أرز', 'عدس', 'مكرونة', 'حمص', 'صلصة طماطم', 'بصل مقلي', 'دقة ثوم']
    },
    steps: {
      en: ['Boil lentils and rice separately.', 'Cook macaroni.', 'Prepare tomato sauce with garlic.', 'Layer rice, lentils, and macaroni.', 'Top with chickpeas, sauce, and fried onions.'],
      ar: ['اسلق العدس والأرز بشكل منفصل.', 'اطبخ المكرونة.', 'جهز صلصة الطماطم بالثوم.', 'ضع طبقات الأرز والعدس والمكرونة.', 'ضع الحمص والصلصة والبصل المقلي على الوجه.']
    }
  },
  {
    id: 'eg-ads-1',
    name: { en: 'Lentil Soup', ar: 'شوربة عدس' },
    description: { en: 'A hearty and warming Egyptian lentil soup.', ar: 'شوربة عدس مصرية مشبعة ودافئة.' },
    image: 'https://images.unsplash.com/photo-1547592115-030372079532?auto=format&fit=crop&q=80&w=800',
    category: 'Soup',
    cuisine: 'Egyptian',
    type: 'Savory',
    time: 'Lunch',
    budget: 'Economic',
    ingredients: {
      en: ['Yellow lentils', 'Carrots', 'Onions', 'Garlic', 'Cumin', 'Bread for croutons'],
      ar: ['عدس أصفر', 'جزر', 'بصل', 'ثوم', 'كمون', 'خبز للمحمص']
    },
    steps: {
      en: ['Boil lentils with vegetables.', 'Blend until smooth.', 'Season with cumin and salt.', 'Serve with toasted bread.'],
      ar: ['اسلق العدس مع الخضروات.', 'اضرب الخليط في الخلاط.', 'تبل بالكمون والملح.', 'قدمه مع الخبز المحمص.']
    }
  },
  {
    id: 'eg-ads-2',
    name: { en: 'Foul Mudammas', ar: 'فول مدمس' },
    description: { en: 'Slow-cooked fava beans, a staple Egyptian breakfast often served in bread.', ar: 'فول مدمس مطهو ببطء، وجبة مصرية أساسية تقدم غالباً في الخبز.' },
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800',
    category: 'Bread',
    cuisine: 'Egyptian',
    type: 'Savory',
    time: 'Breakfast',
    budget: 'Economic',
    ingredients: {
      en: ['Fava beans', 'Lemon', 'Oil', 'Cumin', 'Salt', 'Bread'],
      ar: ['فول', 'ليمون', 'زيت', 'كمون', 'ملح', 'عيش']
    },
    steps: {
      en: ['Mash the beans.', 'Add oil, lemon, and spices.', 'Serve in fresh Egyptian bread.'],
      ar: ['اهرس الفول.', 'أضف الزيت والليمون والبهارات.', 'قدمه في عيش بلدي طازج.']
    }
  },
  {
    id: 'eg-rice-1',
    name: { en: 'Rice with Vermicelli', ar: 'أرز بالشعيرية' },
    description: { en: 'Classic Egyptian white rice cooked with toasted vermicelli.', ar: 'أرز أبيض مصري كلاسيكي مطهو مع الشعيرية المحمرة.' },
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=800',
    category: 'Rice',
    cuisine: 'Egyptian',
    type: 'Savory',
    time: 'Lunch',
    budget: 'Economic',
    ingredients: {
      en: ['Short grain rice', 'Vermicelli', 'Butter/Oil', 'Salt', 'Water'],
      ar: ['أرز مصري', 'شعيرية', 'سمن/زيت', 'ملح', 'ماء']
    },
    steps: {
      en: ['Toast vermicelli in oil until golden.', 'Add rice and stir.', 'Add water and salt.', 'Cook on low heat until water is absorbed.'],
      ar: ['حمر الشعيرية في الزيت حتى تصبح ذهبية.', 'أضف الأرز وقلب.', 'أضف الماء والملح.', 'اتركه على نار هادئة حتى يتشرب الماء.']
    }
  },
  {
    id: 'eg-pasta-1',
    name: { en: 'Pasta with Red Sauce', ar: 'مكرونة بالصلصة' },
    description: { en: 'Simple and delicious pasta with a rich Egyptian tomato sauce.', ar: 'مكرونة بسيطة ولذيذة مع صلصة الطماطم المصرية الغنية.' },
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
    category: 'Pasta',
    cuisine: 'Egyptian',
    type: 'Savory',
    time: 'Lunch',
    budget: 'Economic',
    ingredients: {
      en: ['Pasta', 'Tomato juice', 'Garlic', 'Oil', 'Salt', 'Pepper'],
      ar: ['مكرونة', 'عصير طماطم', 'ثوم', 'زيت', 'ملح', 'فلفل']
    },
    steps: {
      en: ['Boil pasta.', 'Sauté garlic in oil.', 'Add tomato juice and simmer.', 'Mix pasta with sauce.'],
      ar: ['اسلق المكرونة.', 'شوح الثوم في الزيت.', 'أضف عصير الطماطم واتركه يتسبك.', 'قلب المكرونة مع الصلصة.']
    }
  },
  {
    id: 'eg-2',
    name: { en: 'Molokhia', ar: 'ملوخية' },
    description: { en: 'A nutritious green soup made from jute mallow leaves, served with rice or bread.', ar: 'شوربة خضراء مغذية مصنوعة من أوراق الملوخية، تقدم مع الأرز أو الخبز.' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    category: 'Vegetarian',
    cuisine: 'Egyptian',
    type: 'Savory',
    time: 'Lunch',
    budget: 'Regular',
    ingredients: {
      en: ['Molokhia leaves', 'Chicken broth', 'Garlic', 'Coriander', 'Butter'],
      ar: ['أوراق ملوخية', 'مرق دجاج', 'ثوم', 'كزبرة ناشفة', 'زبدة']
    },
    steps: {
      en: ['Finely chop molokhia leaves.', 'Boil broth and add leaves.', 'Sauté garlic and coriander in butter.', 'Pour the garlic mixture (Tasha) over the soup.', 'Serve hot.'],
      ar: ['خرط أوراق الملوخية ناعماً.', 'اغلِ المرق وأضف الملوخية.', 'شوح الثوم والكزبرة في الزبدة.', 'صب "الطشة" فوق الشوربة.', 'تقدم ساخنة.']
    }
  },
  {
    id: 'eg-3',
    name: { en: 'Mahshi', ar: 'محشي' },
    description: { en: 'Vegetables stuffed with a flavorful rice and herb mixture.', ar: 'خضروات محشوة بخلطة الأرز والأعشاب اللذيذة.' },
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    category: 'Vegetarian',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Zucchini/Eggplant/Vine leaves', 'Rice', 'Tomato paste', 'Dill', 'Parsley', 'Coriander', 'Onions'],
      ar: ['كوسة/باذنجان/ورق عنب', 'أرز', 'صلصة طماطم', 'شبت', 'بقدونس', 'كزبرة', 'بصل']
    },
    steps: {
      en: ['Prepare the stuffing by mixing rice, herbs, and tomato sauce.', 'Hollow out the vegetables.', 'Stuff vegetables with the mixture.', 'Cook in a pot with broth until tender.'],
      ar: ['جهز الخلطة بخلط الأرز والأعشاب وصلصة الطماطم.', 'قور الخضروات.', 'احشُ الخضروات بالخلطة.', 'اطبخها في قدر مع المرق حتى تنضج.']
    }
  },
  {
    id: 'eg-4',
    name: { en: 'Kabab & Kofta', ar: 'كباب وكفتة' },
    description: { en: 'Grilled meat chunks and minced meat skewers.', ar: 'قطع لحم مشوية وأسياخ لحم مفروم.' },
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Lamb/Beef chunks', 'Minced meat', 'Onion juice', 'Spices', 'Parsley'],
      ar: ['قطع لحم ضأن/بقري', 'لحم مفروم', 'ماء بصل', 'بهارات', 'بقدونس']
    },
    steps: {
      en: ['Marinate meat in onion juice and spices.', 'Shape minced meat onto skewers.', 'Grill over charcoal until cooked.', 'Serve with tahini and bread.'],
      ar: ['تبل اللحم في ماء البصل والبهارات.', 'صبع اللحم المفروم على الأسياخ.', 'اشوِ على الفحم حتى ينضج.', 'يقدم مع الطحينة والخبز.']
    }
  },
  {
    id: 'eg-5',
    name: { en: 'Fatta', ar: 'فتة' },
    description: { en: 'A celebratory dish of rice, bread, and meat with garlic vinegar sauce.', ar: 'طبق احتفالي من الأرز والخبز واللحم مع صلصة الثوم والخل.' },
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Rice', 'Toasted bread', 'Boiled beef', 'Garlic', 'Vinegar', 'Tomato sauce'],
      ar: ['أرز', 'خبز محمص', 'لحم مسلوق', 'ثوم', 'خل', 'صلصة طماطم']
    },
    steps: {
      en: ['Toast bread and soak in broth.', 'Layer rice over the bread.', 'Prepare garlic vinegar sauce and tomato sauce.', 'Top with boiled meat and sauces.'],
      ar: ['حمص الخبز وسقه بالمرق.', 'ضع طبقة من الأرز فوق الخبز.', 'جهز صلصة الثوم والخل وصلصة الطماطم.', 'ضع اللحم المسلوق والصلصات على الوجه.']
    }
  },
  {
    id: 'eg-6',
    name: { en: 'Bamia (Okra Stew)', ar: 'طاجن بامية' },
    description: { en: 'Okra cooked in a rich tomato sauce with chunks of meat.', ar: 'بامية مطبوخة في صلصة طماطم غنية مع قطع اللحم.' },
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Okra', 'Meat chunks', 'Tomato sauce', 'Garlic', 'Onions', 'Lemon'],
      ar: ['بامية', 'قطع لحم', 'صلصة طماطم', 'ثوم', 'بصل', 'ليمون']
    },
    steps: {
      en: ['Sauté onions and meat.', 'Add tomato sauce and simmer.', 'Add okra and garlic.', 'Cook until tender and finish with lemon juice.'],
      ar: ['شوح البصل واللحم.', 'أضف صلصة الطماطم واتركها تتسبك.', 'أضف البامية والثوم.', 'اطبخها حتى تنضج وأضف عصير الليمون.']
    }
  },
  {
    id: 'eg-7',
    name: { en: 'Potato with Meat Tray', ar: 'صينية بطاطس باللحمة' },
    description: { en: 'Sliced potatoes and meat baked in tomato sauce.', ar: 'شرائح بطاطس ولحم مخبوزة في صلصة الطماطم.' },
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Potatoes', 'Beef chunks', 'Tomato juice', 'Onions', 'Green peppers'],
      ar: ['بطاطس', 'قطع لحم', 'عصير طماطم', 'بصل', 'فلفل أخضر']
    },
    steps: {
      en: ['Slice potatoes and onions.', 'Layer meat and vegetables in a tray.', 'Pour tomato juice over.', 'Bake in the oven until cooked.'],
      ar: ['قطع البطاطس والبصل شرائح.', 'رص اللحم والخضروات في صينية.', 'صب عصير الطماطم فوقها.', 'اخبزها في الفرن حتى تنضج.']
    }
  },
  {
    id: 'eg-8',
    name: { en: 'Moussaka', ar: 'مسقعة' },
    description: { en: 'Fried eggplant and peppers baked with minced meat and tomato sauce.', ar: 'باذنجان وفلفل مقلي مخبوز مع اللحم المفروم وصلصة الطماطم.' },
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Eggplant', 'Minced meat', 'Tomato sauce', 'Green peppers', 'Garlic'],
      ar: ['باذنجان', 'لحم مفروم', 'صلصة طماطم', 'فلفل أخضر', 'ثوم']
    },
    steps: {
      en: ['Fry eggplant slices.', 'Prepare minced meat with tomato sauce.', 'Layer eggplant and meat in a dish.', 'Bake until bubbly.'],
      ar: ['اقلِ شرائح الباذنجان.', 'جهز اللحم المفروم مع صلصة الطماطم.', 'رص الباذنجان واللحم في طبق.', 'اخبزها في الفرن.']
    }
  },
  {
    id: 'eg-9',
    name: { en: 'Fried Fish', ar: 'سمك مقلي' },
    description: { en: 'Crispy fried tilapia served with sayadiya rice.', ar: 'سمك بلطي مقلي مقرمش يقدم مع أرز الصيادية.' },
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    category: 'Fish',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Tilapia fish', 'Garlic', 'Cumin', 'Lemon', 'Flour'],
      ar: ['سمك بلطي', 'ثوم', 'كمون', 'ليمون', 'دقيق']
    },
    steps: {
      en: ['Marinate fish with garlic, cumin, and lemon.', 'Coat in flour.', 'Deep fry until golden brown.', 'Serve with brown rice.'],
      ar: ['تبل السمك بالثوم والكمون والليمون.', 'غلفه بالدقيق.', 'اقلِه في زيت غزير حتى يصبح ذهبياً.', 'يقدم مع الأرز البني.']
    }
  },
  {
    id: 'eg-10',
    name: { en: 'Basmati Rice with Veggies', ar: 'ارز بسمتي بالخضار' },
    description: { en: 'Aromatic basmati rice cooked with mixed vegetables.', ar: 'أرز بسمتي عطري مطبوخ مع خضروات مشكلة.' },
    image: 'https://images.unsplash.com/photo-1512058560366-cd242959b4fe?auto=format&fit=crop&q=80&w=800',
    category: 'Rice',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Basmati rice', 'Peas', 'Carrots', 'Turmeric', 'Cinnamon'],
      ar: ['أرز بسمتي', 'بسلة', 'جزر', 'كركم', 'قرفة']
    },
    steps: {
      en: ['Sauté vegetables.', 'Add rice and spices.', 'Add water and simmer until cooked.'],
      ar: ['شوح الخضروات.', 'أضف الأرز والبهارات.', 'أضف الماء واتركه ينضج.']
    }
  },
  {
    id: 'eg-11',
    name: { en: 'Stuffed Pigeon', ar: 'حمام محشي' },
    description: { en: 'Pigeons stuffed with seasoned rice or freekeh.', ar: 'حمام محشو بالأرز المتبل أو الفريك.' },
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Pigeons', 'Rice', 'Onions', 'Cinnamon', 'Black pepper'],
      ar: ['حمام', 'أرز', 'بصل', 'قرفة', 'فلفل أسود']
    },
    steps: {
      en: ['Prepare stuffing with rice and spices.', 'Stuff the pigeons.', 'Boil until cooked.', 'Fry in butter until golden.'],
      ar: ['جهز الخلطة بالأرز والبهارات.', 'احشُ الحمام.', 'اسلقه حتى ينضج.', 'حمره في الزبدة حتى يصبح ذهبياً.']
    }
  },
  {
    id: 'eg-12',
    name: { en: 'Orzo Soup', ar: 'شوربة لسان عصفور' },
    description: { en: 'A comforting soup made with orzo pasta and chicken broth.', ar: 'شوربة مريحة مصنوعة من مكرونة لسان العصفور ومرق الدجاج.' },
    image: 'https://images.unsplash.com/photo-1547592115-0307283503d4?auto=format&fit=crop&q=80&w=800',
    category: 'Soup',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Orzo pasta', 'Chicken broth', 'Butter', 'Salt', 'Pepper'],
      ar: ['مكرونة لسان عصفور', 'مرق دجاج', 'زبدة', 'ملح', 'فلفل']
    },
    steps: {
      en: ['Brown orzo in butter.', 'Add broth and simmer.', 'Serve hot with lemon.'],
      ar: ['حمر لسان العصفور في الزبدة.', 'أضف المرق واتركه يغلي.', 'يقدم ساخناً مع الليمون.']
    }
  },
  {
    id: 'eg-13',
    name: { en: 'Hawawshi', ar: 'حواوشي' },
    description: { en: 'Pita bread stuffed with seasoned minced meat and baked.', ar: 'خبز بلدي محشو باللحم المفروم المتبل ومخبوز.' },
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Minced meat', 'Pita bread', 'Onions', 'Peppers', 'Spices'],
      ar: ['لحم مفروم', 'خبز بلدي', 'بصل', 'فلفل', 'بهارات']
    },
    steps: {
      en: ['Mix meat with onions and spices.', 'Stuff into bread.', 'Brush with oil and bake or grill.'],
      ar: ['خلط اللحم مع البصل والبهارات.', 'احشُ الخبز.', 'ادهنه بالزيت واخبزه أو اشوِه.']
    }
  },
  {
    id: 'eg-14',
    name: { en: 'Rice Pudding', ar: 'ارز باللبن' },
    description: { en: 'Creamy Egyptian style rice pudding.', ar: 'أرز باللبن كريمي على الطريقة المصرية.' },
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800',
    category: 'Desserts',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Rice', 'Milk', 'Sugar', 'Vanilla', 'Starch'],
      ar: ['أرز', 'لبن', 'سكر', 'فانيليا', 'نشا']
    },
    steps: {
      en: ['Boil rice in water.', 'Add milk and sugar.', 'Thicken with starch.', 'Cool and serve.'],
      ar: ['اسلق الأرز في الماء.', 'أضف اللبن والسكر.', 'اربطه بالنشا.', 'يبرد ويقدم.']
    }
  },
  {
    id: 'eg-15',
    name: { en: 'Om Ali', ar: 'أم علي' },
    description: { en: 'Traditional bread pudding with nuts and cream.', ar: 'بودينج خبز تقليدي مع المكسرات والقشطة.' },
    image: 'https://images.unsplash.com/photo-1579372781848-22827a5121ca?auto=format&fit=crop&q=80&w=800',
    category: 'Desserts',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Puff pastry', 'Milk', 'Sugar', 'Nuts', 'Cream'],
      ar: ['عجينة بف باستري', 'لبن', 'سكر', 'مكسرات', 'قشطة']
    },
    steps: {
      en: ['Break pastry into pieces.', 'Add nuts.', 'Pour hot sweetened milk over.', 'Top with cream and bake.'],
      ar: ['قطع العجينة.', 'أضف المكسرات.', 'صب اللبن الساخن المحلى.', 'ضع القشطة على الوجه واخبزها.']
    }
  },
  {
    id: 'eg-16',
    name: { en: 'Basbousa', ar: 'بسبوسة' },
    description: { en: 'Semolina cake soaked in syrup.', ar: 'كيكة سميد مسقية بالشربات.' },
    image: 'https://images.unsplash.com/photo-1516685018646-548388527c9b?auto=format&fit=crop&q=80&w=800',
    category: 'Desserts',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Semolina', 'Sugar', 'Yogurt', 'Butter', 'Syrup'],
      ar: ['سميد', 'سكر', 'زبادي', 'زبدة', 'شربات']
    },
    steps: {
      en: ['Mix semolina, sugar, and yogurt.', 'Bake until golden.', 'Pour cold syrup over hot cake.'],
      ar: ['خلط السميد والسكر والزبادي.', 'اخبزها حتى تصبح ذهبية.', 'صب الشربات البارد فوقها وهي ساخنة.']
    }
  },
  {
    id: 'eg-17',
    name: { en: 'Macarona Béchamel', ar: 'مكرونة بشاميل' },
    description: { en: 'Pasta baked with minced meat and white béchamel sauce.', ar: 'مكرونة مخبوزة مع اللحم المفروم وصلصة البشاميل البيضاء.' },
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800',
    category: 'Pasta',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Penne pasta', 'Minced meat', 'Milk', 'Flour', 'Butter'],
      ar: ['مكرونة قلم', 'لحم مفروم', 'لبن', 'دقيق', 'زبدة']
    },
    steps: {
      en: ['Boil pasta.', 'Prepare minced meat.', 'Make béchamel sauce.', 'Layer and bake.'],
      ar: ['اسلق المكرونة.', 'جهز اللحم المفروم.', 'جهز صلصة البشاميل.', 'رص الطبقات واخبزها.']
    }
  },
  {
    id: 'eg-18',
    name: { en: 'Falafel (Ta\'ameya)', ar: 'طعمية' },
    description: { en: 'Deep-fried balls of fava bean paste.', ar: 'كرات مقلية من عجينة الفول المدشوش.' },
    image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?auto=format&fit=crop&q=80&w=800',
    category: 'Vegetarian',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Fava beans', 'Leeks', 'Coriander', 'Garlic', 'Spices'],
      ar: ['فول مدشوش', 'كرات', 'كزبرة', 'ثوم', 'بهارات']
    },
    steps: {
      en: ['Grind beans and herbs.', 'Shape into balls.', 'Fry in hot oil.'],
      ar: ['اطحن الفول والأعشاب.', 'شكلها كرات.', 'اقلِها في زيت ساخن.']
    }
  },
  {
    id: 'eg-19',
    name: { en: 'Foul Medames', ar: 'فول مدمس' },
    description: { en: 'Slow-cooked fava beans with oil and spices.', ar: 'فول مدمس مطبوخ ببطء مع الزيت والبهارات.' },
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800',
    category: 'Light Meals',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Fava beans', 'Lemon', 'Olive oil', 'Cumin'],
      ar: ['فول', 'ليمون', 'زيت زيتون', 'كمون']
    },
    steps: {
      en: ['Slow cook beans.', 'Mash slightly.', 'Season with oil, lemon, and cumin.'],
      ar: ['اطبخ الفول ببطء.', 'اهرسه قليلاً.', 'تبله بالزيت والليمون والكمون.']
    }
  },
  {
    id: 'eg-20',
    name: { en: 'Shakshuka', ar: 'شكشوكة' },
    description: { en: 'Eggs poached in a sauce of tomatoes, chili peppers, and onions.', ar: 'بيض مطبوخ في صلصة طماطم وفلفل وبصل.' },
    image: 'https://images.unsplash.com/photo-1590412200988-a436bb715048?auto=format&fit=crop&q=80&w=800',
    category: 'Vegetarian',
    cuisine: 'Egyptian',
    ingredients: {
      en: ['Eggs', 'Tomatoes', 'Onions', 'Peppers', 'Spices'],
      ar: ['بيض', 'طماطم', 'بصل', 'فلفل', 'بهارات']
    },
    steps: {
      en: ['Sauté onions and peppers.', 'Add tomatoes and simmer.', 'Crack eggs on top and cook until set.'],
      ar: ['شوح البصل والفلفل.', 'أضف الطماطم واتركها تتسبك.', 'ضع البيض على الوجه واتركه ينضج.']
    }
  },

  // --- SAUDI MEALS ---
  {
    id: 'sa-1',
    name: { en: 'Kabsa', ar: 'كبسة' },
    description: { en: 'The most famous Saudi dish, rice with meat or chicken and spices.', ar: 'أشهر طبق سعودي، أرز مع اللحم أو الدجاج والبهارات.' },
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=800',
    category: 'Rice',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Basmati rice', 'Lamb/Chicken', 'Kabsa spices', 'Dried lime', 'Saffron'],
      ar: ['أرز بسمتي', 'لحم/دجاج', 'بهارات كبسة', 'لومي', 'زعفران']
    },
    steps: {
      en: ['Cook meat with spices.', 'Add rice and water.', 'Simmer until rice is fluffy.'],
      ar: ['اطبخ اللحم مع البهارات.', 'أضف الأرز والماء.', 'اتركه ينضج حتى يصبح الأرز نثرياً.']
    }
  },
  {
    id: 'sa-2',
    name: { en: 'Mandi', ar: 'مندي' },
    description: { en: 'Traditional dish cooked in a tandoor with smoked flavor.', ar: 'طبق تقليدي يطبخ في التنور بنكهة التدخين.' },
    image: 'https://images.unsplash.com/photo-1512058560366-cd242959b4fe?auto=format&fit=crop&q=80&w=800',
    category: 'Rice',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Rice', 'Lamb', 'Mandi spices', 'Charcoal for smoking'],
      ar: ['أرز', 'لحم ضأن', 'بهارات مندي', 'فحم للتدخين']
    },
    steps: {
      en: ['Cook meat.', 'Prepare rice.', 'Smoke with charcoal for authentic flavor.'],
      ar: ['اطبخ اللحم.', 'جهز الأرز.', 'دخنه بالفحم للحصول على النكهة الأصلية.']
    }
  },
  {
    id: 'sa-3',
    name: { en: 'Madhghout', ar: 'مضغوط' },
    description: { en: 'Rice and meat cooked together in a pressure cooker.', ar: 'أرز ولحم مطبوخان معاً في قدر الضغط.' },
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Rice', 'Meat', 'Tomato paste', 'Spices'],
      ar: ['أرز', 'لحم', 'صلصة طماطم', 'بهارات']
    },
    steps: {
      en: ['Put all ingredients in a pressure cooker.', 'Cook under pressure until done.'],
      ar: ['ضع جميع المكونات في قدر الضغط.', 'اطبخها تحت الضغط حتى تنضج.']
    }
  },
  {
    id: 'sa-4',
    name: { en: 'Jareesh', ar: 'جريش' },
    description: { en: 'Crushed wheat cooked with yogurt and meat.', ar: 'قمح مجروش مطبوخ مع اللبن واللحم.' },
    image: 'https://images.unsplash.com/photo-1547592115-0307283503d4?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Crushed wheat', 'Yogurt', 'Chicken/Meat', 'Onions', 'Butter'],
      ar: ['قمح مجروش', 'لبن زبادي', 'دجاج/لحم', 'بصل', 'زبدة']
    },
    steps: {
      en: ['Cook wheat with broth.', 'Add yogurt and stir.', 'Top with caramelized onions.'],
      ar: ['اطبخ القمح مع المرق.', 'أضف اللبن وقلب.', 'ضع البصل المحمر على الوجه.']
    }
  },
  {
    id: 'sa-5',
    name: { en: 'Qursan', ar: 'قرصان' },
    description: { en: 'Thin sheets of bread soaked in vegetable and meat stew.', ar: 'رقائق خبز رقيقة مسقية بمرق الخضار واللحم.' },
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Qursan bread', 'Mixed vegetables', 'Meat', 'Spices'],
      ar: ['خبز قرصان', 'خضروات مشكلة', 'لحم', 'بهارات']
    },
    steps: {
      en: ['Cook meat and vegetable stew.', 'Layer bread and soak with stew.'],
      ar: ['اطبخ مرق اللحم والخضروات.', 'ضع طبقات الخبز واسقها بالمرق.']
    }
  },
  {
    id: 'sa-6',
    name: { en: 'Saleeg', ar: 'سليق' },
    description: { en: 'Creamy rice dish cooked with milk, served with roasted chicken.', ar: 'طبق أرز كريمي مطبوخ بالحليب، يقدم مع الدجاج المحمر.' },
    image: 'https://images.unsplash.com/photo-1512058560366-cd242959b4fe?auto=format&fit=crop&q=80&w=800',
    category: 'Chicken',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Rice', 'Milk', 'Chicken', 'Mastic', 'Cardamom'],
      ar: ['أرز', 'حليب', 'دجاج', 'مستكة', 'هيل']
    },
    steps: {
      en: ['Boil chicken.', 'Cook rice in chicken broth.', 'Add milk and stir until creamy.', 'Serve with roasted chicken.'],
      ar: ['اسلق الدجاج.', 'اطبخ الأرز في مرق الدجاج.', 'أضف الحليب وقلب حتى يصبح كريمياً.', 'يقدم مع الدجاج المحمر.']
    }
  },
  {
    id: 'sa-7',
    name: { en: 'Matazeez', ar: 'مطازيز' },
    description: { en: 'Small pieces of dough cooked in a rich meat and vegetable stew.', ar: 'قطع صغيرة من العجين مطبوخة في مرق اللحم والخضروات الغني.' },
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Whole wheat dough', 'Meat', 'Vegetables', 'Spices'],
      ar: ['عجين بر', 'لحم', 'خضروات', 'بهارات']
    },
    steps: {
      en: ['Cook meat and vegetables.', 'Add dough pieces one by one.', 'Simmer until cooked.'],
      ar: ['اطبخ اللحم والخضروات.', 'أضف قطع العجين واحدة تلو الأخرى.', 'اتركه ينضج.']
    }
  },
  {
    id: 'sa-8',
    name: { en: 'Marqooq', ar: 'مرقوق' },
    description: { en: 'Large sheets of dough cooked in a flavorful stew.', ar: 'رقائق كبيرة من العجين مطبوخة في مرق لذيذ.' },
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Wheat dough', 'Meat', 'Mixed vegetables', 'Spices'],
      ar: ['عجين بر', 'لحم', 'خضروات مشكلة', 'بهارات']
    },
    steps: {
      en: ['Prepare meat and vegetable stew.', 'Add dough sheets and cook until tender.'],
      ar: ['جهز مرق اللحم والخضروات.', 'أضف رقائق العجين واطبخها حتى تنضج.']
    }
  },
  {
    id: 'sa-9',
    name: { en: 'Bukhari Rice', ar: 'رز بخاري' },
    description: { en: 'Fragrant rice cooked with carrots and raisins, usually with chicken.', ar: 'أرز عطري مطبوخ مع الجزر والزبيب، عادة مع الدجاج.' },
    image: 'https://images.unsplash.com/photo-1512058560366-cd242959b4fe?auto=format&fit=crop&q=80&w=800',
    category: 'Chicken',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Rice', 'Chicken', 'Carrots', 'Raisins', 'Tomato paste'],
      ar: ['أرز', 'دجاج', 'جزر', 'زبيب', 'صلصة طماطم']
    },
    steps: {
      en: ['Sauté carrots and raisins.', 'Cook chicken with tomato paste.', 'Add rice and water.', 'Simmer until done.'],
      ar: ['شوح الجزر والزبيب.', 'اطبخ الدجاج مع صلصة الطماطم.', 'أضف الأرز والماء.', 'اتركه ينضج.']
    }
  },
  {
    id: 'sa-10',
    name: { en: 'Sayadiya Rice', ar: 'رز صيادية' },
    description: { en: 'Brown rice cooked with caramelized onions, served with fish.', ar: 'أرز بني مطبوخ مع البصل المحمر، يقدم مع السمك.' },
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    category: 'Fish',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Rice', 'Fish', 'Onions', 'Spices'],
      ar: ['أرز', 'سمك', 'بصل', 'بهارات']
    },
    steps: {
      en: ['Caramelize onions until dark brown.', 'Add water and spices.', 'Cook rice in this water.', 'Serve with fried fish.'],
      ar: ['حمر البصل حتى يصبح بنياً غامقاً.', 'أضف الماء والبهارات.', 'اطبخ الأرز في هذا الماء.', 'يقدم مع السمك المقلي.']
    }
  },
  {
    id: 'sa-11',
    name: { en: 'Lentil Soup', ar: 'شوربة عدس' },
    description: { en: 'Warm and hearty yellow lentil soup.', ar: 'شوربة عدس أصفر دافئة ومغذية.' },
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    category: 'Soup',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Yellow lentils', 'Onions', 'Carrots', 'Cumin'],
      ar: ['عدس أصفر', 'بصل', 'جزر', 'كمون']
    },
    steps: {
      en: ['Boil lentils and vegetables.', 'Blend until smooth.', 'Season and serve.'],
      ar: ['اسلق العدس والخضروات.', 'اخلطها حتى تصبح ناعمة.', 'تبلها وقدمها.']
    }
  },
  {
    id: 'sa-12',
    name: { en: 'Mutabbaq', ar: 'مطبق' },
    description: { en: 'Stuffed pancake filled with meat, eggs, and leeks.', ar: 'فطيرة محشوة باللحم والبيض والكرات.' },
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    category: 'Light Meals',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Dough sheets', 'Minced meat', 'Eggs', 'Leeks'],
      ar: ['رقائق عجين', 'لحم مفروم', 'بيض', 'كرات']
    },
    steps: {
      en: ['Mix stuffing.', 'Place on dough and fold.', 'Cook on a griddle.'],
      ar: ['خلط الحشوة.', 'ضعها على العجين وطبقها.', 'اطبخها على الصاج.']
    }
  },
  {
    id: 'sa-13',
    name: { en: 'Masoub', ar: 'معصوب' },
    description: { en: 'A sweet dish made of mashed bananas and bread.', ar: 'طبق حلو مصنوع من الموز المهروس والخبز.' },
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800',
    category: 'Desserts',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Bananas', 'Bread', 'Honey', 'Cream'],
      ar: ['موز', 'خبز', 'عسل', 'قشطة']
    },
    steps: {
      en: ['Mash bananas and bread together.', 'Mix in honey and cream.'],
      ar: ['اهرس الموز والخبز معاً.', 'أضف العسل والقشطة.']
    }
  },
  {
    id: 'sa-14',
    name: { en: 'Areesh', ar: 'عريش' },
    description: { en: 'Traditional wheat-based dish.', ar: 'طبق تقليدي يعتمد على القمح.' },
    image: 'https://images.unsplash.com/photo-1547592115-0307283503d4?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Wheat', 'Meat', 'Ghee'],
      ar: ['قمح', 'لحم', 'سمن']
    },
    steps: {
      en: ['Cook wheat and meat until very soft.', 'Mash and top with ghee.'],
      ar: ['اطبخ القمح واللحم حتى ينضجا تماماً.', 'اهرسهما وضع السمن على الوجه.']
    }
  },
  {
    id: 'sa-15',
    name: { en: 'Haneeth', ar: 'حنيذ' },
    description: { en: 'Slow-roasted lamb cooked with banana leaves.', ar: 'لحم ضأن مشوي ببطء مع أوراق الموز.' },
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Lamb', 'Banana leaves', 'Spices'],
      ar: ['لحم ضأن', 'أوراق موز', 'بهارات']
    },
    steps: {
      en: ['Wrap meat in banana leaves.', 'Roast slowly until tender.'],
      ar: ['غلف اللحم بأوراق الموز.', 'اشوِه ببطء حتى ينضج.']
    }
  },
  {
    id: 'sa-16',
    name: { en: 'Kabli Rice', ar: 'رز كابلي' },
    description: { en: 'Fragrant rice with orange peel and spices.', ar: 'أرز عطري مع قشر البرتقال والبهارات.' },
    image: 'https://images.unsplash.com/photo-1512058560366-cd242959b4fe?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Rice', 'Meat', 'Orange peel', 'Spices'],
      ar: ['أرز', 'لحم', 'قشر برتقال', 'بهارات']
    },
    steps: {
      en: ['Cook meat with orange peel.', 'Add rice and cook together.'],
      ar: ['اطبخ اللحم مع قشر البرتقال.', 'أضف الأرز واطبخهما معاً.']
    }
  },
  {
    id: 'sa-17',
    name: { en: 'Kunafa', ar: 'كنافة' },
    description: { en: 'Sweet pastry with cheese or cream, soaked in syrup.', ar: 'حلوى من العجين مع الجبن أو القشطة، مسقية بالشربات.' },
    image: 'https://images.unsplash.com/photo-1579372781848-22827a5121ca?auto=format&fit=crop&q=80&w=800',
    category: 'Desserts',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Kunafa dough', 'Cheese/Cream', 'Butter', 'Syrup'],
      ar: ['عجينة كنافة', 'جبن/قشطة', 'زبدة', 'شربات']
    },
    steps: {
      en: ['Layer dough and filling.', 'Bake until golden.', 'Pour syrup over.'],
      ar: ['ضع طبقات العجين والحشوة.', 'اخبزها حتى تصبح ذهبية.', 'صب الشربات فوقها.']
    }
  },
  {
    id: 'sa-18',
    name: { en: 'Luqaimat', ar: 'لقيمات' },
    description: { en: 'Sweet fried dough balls with date syrup.', ar: 'كرات عجين مقلية محلاة بدبس التمر.' },
    image: 'https://images.unsplash.com/photo-1516685018646-548388527c9b?auto=format&fit=crop&q=80&w=800',
    category: 'Desserts',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Flour', 'Yeast', 'Sugar', 'Date syrup'],
      ar: ['دقيق', 'خميرة', 'سكر', 'دبس تمر']
    },
    steps: {
      en: ['Prepare dough and let rise.', 'Fry small balls.', 'Drizzle with date syrup.'],
      ar: ['جهز العجينة واتركها تختمر.', 'اقلِ كرات صغيرة.', 'صب دبس التمر فوقها.']
    }
  },
  {
    id: 'sa-19',
    name: { en: 'Sambousek', ar: 'سمبوسة' },
    description: { en: 'Fried or baked pastry filled with meat or cheese.', ar: 'عجينة مقلية أو مخبوزة محشوة باللحم أو الجبن.' },
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    category: 'Light Meals',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Pastry sheets', 'Minced meat/Cheese', 'Onions'],
      ar: ['رقائق سمبوسة', 'لحم مفروم/جبن', 'بصل']
    },
    steps: {
      en: ['Stuff pastry.', 'Fry or bake until crispy.'],
      ar: ['احشُ العجينة.', 'اقلِها أو اخبزها حتى تصبح مقرمشة.']
    }
  },
  {
    id: 'sa-20',
    name: { en: 'Gursan', ar: 'قرصان' },
    description: { en: 'Traditional Saudi bread dish.', ar: 'طبق خبز سعودي تقليدي.' },
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800',
    category: 'Meat',
    cuisine: 'Saudi',
    ingredients: {
      en: ['Bread', 'Meat', 'Vegetables'],
      ar: ['خبز', 'لحم', 'خضروات']
    },
    steps: {
      en: ['Cook meat and vegetables.', 'Soak bread in the stew.'],
      ar: ['اطبخ اللحم والخضروات.', 'اسقِ الخبز بالمرق.']
    }
  },
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
];
