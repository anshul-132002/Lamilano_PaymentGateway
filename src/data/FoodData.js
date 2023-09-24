const FoodData = [
    {
      id: 1,
      img: "https://w7.pngwing.com/pngs/384/1010/png-transparent-california-style-pizza-sicilian-pizza-bacon-ham-bacon-onion-pizza-barbecue-food-baking-thumbnail.png",
      name: "Onion Pizza",
      price: 150,
      desc: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
      category: "Lunch",
      rating: 4.5,
    },
    {
      id: 2,
      img: "https://w7.pngwing.com/pngs/259/988/png-transparent-whole-pizza-sushi-pizza-italian-cuisine-makizushi-japanese-cuisine-tomato-pizza-food-recipe-pizza-logo-thumbnail.png",
      name: "Tomato Pizza",
      price: 120,
      desc: "A delicious pizza topped with fresh Tomato for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
      category: "Lunch",
      rating: 4.2,
    },
    {
      id: 3,
      img: "https://w7.pngwing.com/pngs/526/624/png-transparent-california-style-pizza-sicilian-pizza-pizza-margherita-italian-cuisine-pizza-thumbnail.png",
      name: "7 cheese-Pizza",
      price: 150,
      desc: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
      category: "Lunch",
      rating: 4.5,
    },
    {
      id: 4,
      img: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
      name: "Margherita Pizza",
      price: 130,
      desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
      category: "Lunch",
      rating: 4.2,
    },
    {
      id: 5,
      img: "https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png",
      name: "Pepperoni Pizza",
      price: 160,
      desc: "Indulge in the savory delight of this Pepperoni Pizza, loaded with slices of spicy pepperoni, melted cheese, and a tangy tomato sauce. A popular choice that's perfect for satisfying your pizza cravings.",
      category: "Lunch",
      rating: 4.6,
    },
    {
      id: 6,
      img: "https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png",
      name: "Mushroom and Spinach Pizza",
      price: 140,
      desc: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. Topped with a blend of cheeses, this Mushroom and Spinach Pizza offers .",
      category: "Lunch",
      rating: 4.2,
    },
    {
      id: 7,
      img: "https://w7.pngwing.com/pngs/843/171/png-transparent-pizza-73-restaurant-catupiry-chicken-as-food-pizza-baked-goods-food-recipe-thumbnail.png",
      name: "BBQ Chicken Pizza",
      price: 170,
      desc: "Savor the smoky goodness of this BBQ Chicken Pizza, featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses. A fusion of flavors that's sure to delight your taste buds.",
      category: "Lunch",
      rating: 4.8,
    },
    {
      id: 8,
      img: "https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png",
      name: "Classic Pancakes",
      price: 80,
      desc: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter. A timeless breakfast favorite that's sure to satisfy your morning cravings.",
      category: "Breakfast",
      rating: 4.5,
    },
    {
      id: 9,
      img: "https://w7.pngwing.com/pngs/645/475/png-transparent-croissant-bread-croissant-muffin-brunch-bacon-egg-and-cheese-sandwich-bread-croissants-baked-goods-food-baking-thumbnail.png",
      name: "Egg and Bacon Croissant",
      price: 110,
      desc: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. A savory and satisfying breakfast option that's perfect for on-the-go mornings.",
      category: "Breakfast",
      rating: 4.2,
    },
    {
      id: 10,
      img: "https://w7.pngwing.com/pngs/683/103/png-transparent-frozen-yogurt-parfait-breakfast-yoghurt-fruit-salad-yogurt-frutti-di-bosco-food-breakfast-thumbnail.png",
      name: "Greek Yogurt Parfait",
      price: 95,
      desc: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola. A balanced option that provides a burst of flavors and energy.",
      category: "Breakfast",
      rating: 4.1,
    },
    {
      id: 11,
      img: "https://w7.pngwing.com/pngs/400/603/png-transparent-toast-tostytosty-la-tosteria-menu-food-dish-avocado-toast-food-toast-avocado-toast-thumbnail.png",
      name: "Avocado Toast",
      price: 120,
      desc: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes. A trendy and nutritious breakfast choice.",
      category: "Breakfast",
      rating: 4.6,
    },
    {
      id: 12,
      img: "https://w7.pngwing.com/pngs/20/725/png-transparent-grain-bowl-breakfast-cereal-muesli-corn-flakes-bowl-granola-food-breakfast-recipe-thumbnail.png",
      name: "Fruit and Nut Oatmeal",
      price: 85,
      desc: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
      category: "Breakfast",
      rating: 4.5,
    },
    {
      id: 13,
      img: "https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png",
      name: "Grilled Salmon",
      price: 190,
      desc: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables. A healthy and flavorful dinner option that's rich in omega-3 fatty acids.",
      category: "Dinner",
      rating: 4.5,
    },
    {
      id: 14,
      img: "https://w7.pngwing.com/pngs/756/828/png-transparent-taglierini-carbonara-fettuccine-alfredo-chicken-pasta-chicken-fillet-thumbnail.png",
      name: "Chicken Alfredo Pasta",
      price: 160,
      desc: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta, rich Alfredo sauce, and savory chicken.",
      category: "Dinner",
      rating: 4.8,
    },
    {
      id: 15,
      img: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
      name: "Vegetable Stir-Fry",
      price: 130,
      desc: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
      category: "Dinner",
      rating: 4.2,
    },
    {
      id: 16,
      img: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
      name: "Grilled Chicken Burrito Bowl",
      price: 160,
      desc: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
      category: "Dinner",
      rating: 4.6,
    },
    {
      id: 17,
      img: "https://w7.pngwing.com/pngs/390/162/png-transparent-spaghetti-alla-puttanesca-pasta-carbonara-risotto-al-dente-bowl-of-pasta-food-animals-recipe-thumbnail.png",
      name: "Mushroom Risotto",
      price: 175,
      desc: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese. A comforting and sophisticated dinner choice.",
      category: "Dinner",
      rating: 4.5,
    },
    {
      id: 18,
      img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
      name: "Cheese and Crackers Platter",
      price: 120,
      desc: "Enjoy a variety of artisan cheeses, paired with an assortment of crispy crackers and complemented by fresh fruits and nuts. A delightful snack option for sharing or indulging in on your own.",
      category: "Snacks",
      rating: 4.3,
    },
    {
      id: 19,
      img: "https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png",
      name: "Crispy Chicken Wings",
      price: 130,
      desc: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection. Choose your favorite sauce, from tangy BBQ to spicy buffalo, for a flavorful snacking experience.",
      category: "Snacks",
      rating: 4.4,
    },
    {
      id: 20,
      img: "https://w7.pngwing.com/pngs/756/585/png-transparent-pakistani-cuisine-indian-cuisine-paneer-tikka-biryani-mediterranean-cuisine-menu-food-recipe-chicken-thumbnail.png",
      name: "Paneer Tikka Skewers",
      price: 130,
      desc: "Enjoy succulent pieces of marinated paneer (Indian cottage cheese) skewered and grilled to perfection. Served with mint chutney, these paneer tikka skewers offer a flavorful and aromatic Indian snack experience.",
      category: "Snacks",
      rating: 4.9,
    },
    {
      id: 21,
      img: "https://w7.pngwing.com/pngs/356/675/png-transparent-falafel-lebanese-cuisine-take-out-mediterranean-cuisine-hummus-bed-miscellaneous-furniture-food-thumbnail.png",
      name: "Hummus and Veggie Platter",
      price: 90,
      desc: "Relish the smooth and flavorful hummus accompanied by a variety of fresh vegetable sticks and pita bread. A nutritious and satisfying option for a light and refreshing snack.",
      category: "Snacks",
      rating: 4.4,
    },
    {
      id: 22,
      img: "https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png",
      name: "Fruit Skewers",
      price: 70,
      desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
      category: "Snacks",
      rating: 4.8,
    },
    {
      id: 23,
      img: "https://w7.pngwing.com/pngs/816/326/png-transparent-calzone-chicago-style-pizza-buffalo-wing-hamburger-onions-food-recipe-cheese-thumbnail.png",
      name: "Stuffed Garlic Bread",
      price: 149,
      desc: "Garlic bread (also called garlic toast) consists of bread (usually a baguette, sour dough, or bread such as ciabatta), topped with garlic and occasionally olive oil or butter and may include additional herbs, such as oregano or chives.",
      category: "Snacks",
      rating: 4.9,
    },
    {
      id: 24,
      img: "https://w7.pngwing.com/pngs/707/623/png-transparent-lasagna-with-topping-lasagne-pizza-italian-cuisine-marinara-sauce-take-out-pizza-food-beef-recipe-thumbnail.png",
      name: "5 cheese Garlic Bread",
      price: 169,
      desc: " Cheese Garlic bread (also called garlic toast) consists of bread (usually a baguette, sour dough, or bread such as ciabatta), topped with garlic and occasionally olive oil or butter and may include additional herbs, such as oregano or chives.",
      category: "Snacks",
      rating: 4.4,
    },
    {
      id: 25,
      img: "https://w7.pngwing.com/pngs/277/41/png-transparent-potato-wedges-french-fries-pizza-buffalo-wing-fast-food-fried-potato-food-recipe-american-food-thumbnail.png",
      name: "Golden Corn Bread",
      price: 169,
      desc: "Golden corn cheese Garlic bread (also called garlic toast) consists of bread (usually a baguette, sour dough, or bread such as ciabatta), topped with garlic and occasionally olive oil or butter and may include additional herbs, such as oregano or chives.",
      category: "Snacks",
      rating: 4.3,
    },
    {
       id: 26,
      img: "https://w7.pngwing.com/pngs/421/956/png-transparent-pasta-served-in-bowl-tagliatelle-fettuccine-alfredo-carbonara-pasta-pizza-spagetti-pasta-cream-food-recipe-thumbnail.png",
      name: "Cheesy Mac",
      price: 139,
      desc: "Mac and cheese is a rich and creamy dish consisting of macaroni pasta mixed with a cheesy sauce. It's particularly popular in the United States",
      category: "Snacks",
      rating: 4.8,
    },
    {
      id: 27,
      img: "https://5.imimg.com/data5/PB/PF/MY-24590086/choco-lava-cake.jpg",
      name: "Choco Lava Cake",
      price: 99,
      desc: "Chocolate Lava Cake is a small, individual-sized cake. The center is slightly undercooked, on purpose, resulting in a gooey, melty, and decadent treat that oozes out when you cut into it. Chocolate Lava Cake is the perfect, romantic dessert for Valentine's Day or for when you're trying to impress.",
      category: "Deserts",
      rating: 4.9,
    },
    {
      id: 28,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT754MB8M2IgxSSL7zxlfPXj1WdGKezGgwrXijJofQD8KsOvx0bs2v-DfK5ZWMqct_l77o&usqp=CAU",
      name: " Red velvet Cake",
      price: 99,
      desc: "Red velvet Lava Cake is a small, individual-sized cake. The center is slightly undercooked, on purpose, resulting in a gooey, melty, and decadent treat that oozes out when you cut into it. Chocolate Lava Cake is the perfect, romantic dessert for Valentine's Day or for when you're trying to impress.",
      category: "Deserts",
      rating: 4.9,
    },
    {
      id: 29,
      img: "https://w7.pngwing.com/pngs/940/275/png-transparent-pretzel-lemonade-dipping-sauce-auntie-anne-s-mustard-sauce-food-sweetness-coffee-thumbnail.png",
      name: " Jalepeno Dip",
      price: 25,
      desc: "Made with the goodness of fresh yoghurt, cheddar cheese and with the tangy fieriness of jalapenos. And the best part of this dip, it is one of the healthiest option you can get in the market. You have to eat it to believe it",
      category: "Side Dips",
      rating: 4.1,
    },
    {
      id: 30,
      img: "https://w7.pngwing.com/pngs/584/716/png-transparent-white-ceramic-bowl-marinara-sauce-pretzel-barbecue-sauce-barbecue-grill-dipping-sauce-sauce-food-cheese-recipe-thumbnail.png",
      name: "Peri Peri Dip",
      price: 25,
      desc: "Made with the goodness of fresh yoghurt, cheddar cheese and with the tangy fieriness of jalapenos. And the best part of this dip, it is one of the healthiest option you can get in the market. You have to eat it to believe it",
      category: "Side Dips",
      rating: 4.1,
    },
    {
      id: 31,
      img: "https://w7.pngwing.com/pngs/268/871/png-transparent-creme-fraiche-aioli-mayonnaise-flavor-creme-anglaise-others-cream-condiment-dairy-product-thumbnail.png",
      name: "cheese Dip",
      price: 25,
      desc: "Made with the goodness of fresh yoghurt, cheddar cheese and with the tangy fieriness of jalapenos. And the best part of this dip, it is one of the healthiest option you can get in the market. You have to eat it to believe it",
      category: "Side Dips",
      rating: 4.1,
    },
    {
      id: 32,
      img: "https://w7.pngwing.com/pngs/584/716/png-transparent-white-ceramic-bowl-marinara-sauce-pretzel-barbecue-sauce-barbecue-grill-dipping-sauce-sauce-food-cheese-recipe-thumbnail.png",
      name: "Hot & Chilly Dip",
      price: 25,
      desc: "Made with the goodness of fresh yoghurt, cheddar cheese and with the tangy fieriness of jalapenos. And the best part of this dip, it is one of the healthiest option you can get in the market. You have to eat it to believe it",
      category: "Side Dips",
      rating: 4.1,
    },
  ];
  export default FoodData;