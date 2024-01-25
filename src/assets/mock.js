const RestaurantData = [
  {
    id: 1,
    title: 'McDonald',
    menu: [
      {
        id: 'menu1',
        title: 'Limited Edition',
        items: [
          { 
            name: 'MENU BIG ANGUS',
            details: {
              price: '14.99',
              description: 'The Menu includes an Angus sandwich, a big portion of fries and at choice a soft-drink, water...'
            },
          },
          { 
            name: 'MENU BIG McCrispy',
            details: {
              price: '13.49',
              description: 'The Menu includes a McCrispy sandwich, a big portion of fries and at choice a soft-drink, water...'
            },
          },
          // Other menu items...
        ],
      },
      {
        id: 'menu2',
        title: 'Menu Maxi',
        items: [
          { 
            name: 'Big Mac',
            details: {
              price: '10.99',
              description: 'The classic Big Mac with two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.'
            },
          },
          { 
            name: 'Quarter Pounder',
            details: {
              price: '9.99',
              description: 'Quarter Pounder with cheese, a 100% beef patty seasoned with just a pinch of salt and pepper, topped with slivered onions, tangy pickles, ketchup, mustard, and cheese.'
            },
          },
          // Other menu items...
        ],
      }
    ]
  },
  {
    id: 2,
    title: 'KFC',
    menu: [
      {
        id: 'menu1',
        title: 'Menu 1',
        items: [
          { 
            name: 'Original Recipe Chicken',
            details: {
              price: '9.99',
              description: 'Crispy, juicy chicken seasoned with a special blend of 11 herbs and spices.'
            },
          },
          { 
            name: 'Zinger Burger',
            details: {
              price: '8.49',
              description: 'A spicy, crunchy chicken fillet, topped with lettuce and mayo, served in a soft bun.'
            },
          },
          // Other menu items...
        ],
      },
      {
        id: 'menu2',
        title: 'Menu 2',
        items: [
          { 
            name: 'Colonel Bucket',
            details: {
              price: '21.99',
              description: 'A bucket filled with a variety of chicken pieces, perfect for sharing.'
            },
          },
          { 
            name: 'Popcorn Chicken',
            details: {
              price: '6.99',
              description: 'Bite-sized chicken pieces coated in KFC\'s famous seasoning.'
            },
          },
          // Other menu items...
        ],
      }
    ]
  }
];

export default RestaurantData;
