const temporary = [ {      
    id: 'menu3',
    title: 'Sandwich',
    items: [
      { 
        name: 'McChicken Sandwich',
        details: {
          price: '5.99',
          description: 'McChicken Sandwich made with a crispy chicken fillet and creamy mayo, sandwiched between warm, toasted bun.'
        },
      },
      { 
        name: 'Grilled Chicken Sandwich',
        details: {
          price: '6.49',
          description: 'Grilled Chicken Sandwich made with juicy grilled chicken, fresh lettuce, creamy mayo, and a toasted bun.'
        },
      },
      { 
        name: 'Bacon Ranch Grilled Chicken Sandwich',
        details: {
          price: '7.49',
          description: 'Bacon Ranch Grilled Chicken Sandwich made with juicy grilled chicken, crisp bacon, ranch sauce, and a toasted bun.'
        },
      },
      { 
        name: 'Double Cheeseburger',
        details: {
          price: '8.49',
          description: 'Double Cheeseburger with two 100% pure beef patties, two slices of American cheese, ketchup, mustard, pickles, and onions.'
        },
      },
      { 
        name: 'McDouble',
        details: {
          price: '7.99',
          description: 'McDouble with two 100% pure beef patties, seasoned with a pinch of salt and pepper, slivered onions, tangy pickles, ketchup, mustard, and a slice of melty American cheese.'
        },
      },
      { 
        name: 'Bacon McDouble',
        details: {
          price: '8.49',
          description: 'Bacon McDouble with two savory hot beef patties, topped with Applewood smoked bacon, onions, ketchup, mustard, and pickles.'
        },
      },
    ],
  },
  {
    id: 'menu4',
    title: 'Salads',
    items: [
      { 
        name: 'Caesar Salad',
        details: {
          price: '6.99',
          description: 'Fresh lettuce, parmesan cheese, croutons, and Caesar dressing.'
        },
      },
      { 
        name: 'Side Salad',
        details: {
          price: '2.99',
          description: 'Fresh lettuce, mixed greens, cherry tomatoes, and your choice of dressing.'
        },
      },
      { 
        name: 'Southwest Grilled Chicken Salad',
        details: {
          price: '8.49',
          description: 'Grilled chicken, mixed greens, black beans, roasted corn, tomatoes, and Southwest ranch dressing.'
        },
      },
      { 
        name: 'Bacon Ranch Salad',
        details: {
          price: '7.99',
          description: 'Grilled chicken, bacon, mixed greens, tomatoes, shredded cheese, and ranch dressing.'
        },
      },
      { 
        name: "Fruit 'N Yogurt Parfait",
        details: {
          price: '3.49',
          description: 'Low-fat vanilla yogurt layered with strawberries, blueberries, and granola.'
        },
      },
      { 
        name: 'Apple Slices',
        details: {
          price: '1.99',
          description: 'Fresh, crisp apple slices.'
        },
      },
    ],
  },
  {
    id: 'menu5',
    title: 'Happymeal',
    items: [
      { 
        name: 'Happy Meal Cheeseburger',
        details: {
          price: '5.99',
          description: 'A classic cheeseburger, small fries, and your choice of a small drink or apple slices.'
        },
      },
      { 
        name: 'Happy Meal Nuggets',
        details: {
          price: '6.49',
          description: '4-piece Chicken McNuggets, small fries, and your choice of a small drink or apple slices.'
        },
      },
      { 
        name: 'Happy Meal McToast',
        details: {
          price: '5.99',
          description: 'Egg and cheese on a toasted English muffin, small fries, and your choice of a small drink or apple slices.'
        },
      },
      { 
        name: 'Happy Meal Hamburger',
        details: {
          price: '5.99',
          description: 'A classic hamburger, small fries, and your choice of a small drink or apple slices.'
        },
      },
      { 
        name: 'McChicken with Pickles',
        details: {
          price: '4.99',
          description: 'A McChicken sandwich with pickles.'
        },
      },
      { 
        name: 'Apple Slices',
        details: {
          price: '1.99',
          description: 'Fresh, crisp apple slices.'
        },
      },
    ],
  },
  {
    id: 'menu6',
    title: 'Desserts',
    items: [
      { 
        name: 'McFlurry',
        details: {
          price: '3.99',
          description: 'Soft-serve ice cream blended with your choice of mix-ins.'
        },
      },
      { 
        name: 'Apple Pie',
        details: {
          price: '1.49',
          description: 'Warm, flaky pie crust filled with cinnamon-spiced apples.'
        },
      },
      { 
        name: 'Sundae',
        details: {
          price: '2.29',
          description: 'Soft-serve vanilla ice cream topped with your choice of hot fudge, caramel, or strawberry sauce.'
        },
      },
      { 
        name: 'Chocolate Shake',
        details: {
          price: '3.49',
          description: 'Creamy chocolate shake made with our soft-serve ice cream and milk.'
        },
      },
      { 
        name: 'Hot Fudge Sundae',
        details: {
          price: '2.49',
          description: 'Soft-serve vanilla ice cream topped with hot fudge sauce and a maraschino cherry.'
        },
      },
      { 
        name: 'Soft-Serve Cone',
        details: {
          price: '1.00',
          description: 'Creamy soft-serve vanilla ice cream in a crispy cone.'
        },
      },
    ],
  },
  {
    id: 'menu7',
    title: 'Drinks',
    items: [
      { 
        name: 'Coca-Cola',
        details: {
          price: '1.99',
          description: 'Classic Coca-Cola soda.'
        }
      },
      { 
        name: 'Sprite',
        details: {
          price: '1.99',
          description: 'Refreshing lemon-lime soda.'
        }
      },
      { 
        name: 'Fanta',
        details: {
          price: '1.99',
          description: 'Fruity orange soda.'
        }
      },
      { 
        name: 'Iced Coffee',
        details: {
          price: '2.49',
          description: 'Chilled coffee served over ice cubes.'
        }
      },
      { 
        name: 'Sweet Tea',
        details: {
          price: '1.79',
          description: 'Refreshing sweetened tea.'
        }
      },
      { 
        name: 'Mocha Frappé',
        details: {
          price: '3.49',
          description: 'Creamy and indulgent blended coffee beverage.'
        }
      }
    ]
  },
  {
    id: 'menu8',
    title: 'Shakes',
    items: [
      { 
        name: 'Vanilla Shake',
        details: {
          price: '3.99',
          description: 'Classic vanilla-flavored milkshake.'
        }
      },
      { 
        name: 'Chocolate Shake',
        details: {
          price: '3.99',
          description: 'Rich and creamy chocolate-flavored milkshake.'
        }
      },
      { 
        name: 'Strawberry Shake',
        details: {
          price: '3.99',
          description: 'Delicious strawberry-flavored milkshake.'
        }
      },
      { 
        name: 'Oreo McFlurry',
        details: {
          price: '4.29',
          description: 'Creamy vanilla soft serve blended with Oreo cookie pieces.'
        }
      },
      { 
        name: 'Chocolate Chip Cookie Topped McFlurry',
        details: {
          price: '4.29',
          description: 'Vanilla soft serve topped with chocolate chip cookies.'
        }
      },
      { 
        name: "M&M's McFlurry",
        details: {
          price: '4.29',
          description: "Vanilla soft serve blended with colorful M&M's candies."
        }
      }
    ]
  },
]