import burger from './burger.png';
import menuMC from './menuMC.png'
import menuMC2 from './menuMC2.png'
import saladMC from './saladMC.png'
import happpymeal from './happymeal.png'
import appleslicesMC from './appleslicesMC.png'
import dessertMC from './dessertMC.png'
import colaMC from './colaMC.png'
import cappucinoMC from './cappucinoMC.png'
import sweetTea from './Ceai-menta_2.png'
import spriteMC from './spriteMC.png'
import fantaMC from './Fanta400ml.png'
import mocchaMC from './mocchaMC.png'
import KFCburgerMenu from './KFC_Original-Recipe-Burger_Box.png'
import KFCwrapMenu from './Classic-Twister-Meal.jpg'
import kfcwrap from './Twister_Wrap.jpg'
import kfcburger from './kfcburger.png'
import kfcbucket from './kfcbucket.jpg'
import kfcbox from './kfc_cro_twister_box_delivery_440x440.png'
import kfcstrips from './Zestaw_3-strips+-dip_coleslaw_NEW_240.png'
import kfcwings from './kfcwings.png'
import kfcpepsi from './KFC_W_Pepsi.png'
import kfcdietpepsi from './KFC_W_PepsiMax.png'
import kfcwater from './Aquafina-Purified-Bottled-Drinking-Water-1-5-Liter-Bottle_83568193-2418-40f0-8367-4fd80481e2f8_1.fc5284020d9e9b9bcd45d777a9e62bb5.webp'
import kfcbrisk from './brisk.webp'
import kfcorange from './MOBORDER_TROPICANA_ORANGE_1200x800.jpg'
import kfchotchocalate from './MOBORDER_HOT_CHOCOLATE_1200x800 (1).jpg'
import kfcmountaindew from './mountain-dew-kfc-sweet-lightning-ft-BLOG0619-4040fd2af3b748cd982a6673ab570870.jpg'
import kfclipton from './Drink_Lipton_Iced_Tea.png'



const RestaurantData = [
  {
    id: 1,
    title: 'McDonalds',
    menu: [
      {
        id: 'menu1',
        title: 'Limited Edition',
        items: [
          { 
            name: 'MENU BIG ANGUS',
            details: {
              price: '14.99',
              description: 'The Menu includes an Angus sandwich, a big portion of fries and at choice a soft-drink, water...',
              img: menuMC

            },
          },
          { 
            name: 'MENU BIG McCrispy',
            details: {
              price: '13.49',
              description: 'The Menu includes a McCrispy sandwich, a big portion of fries and at choice a soft-drink, water...',
              img: menuMC
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
              description: 'The classic Big Mac with two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.',
              img: menuMC2
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
      },
      {      
        id: 'menu3',
        title: 'Sandwich',
        items: [
          { 
            name: 'McChicken Sandwich',
            details: {
              price: '5.99',
              description: 'McChicken Sandwich made with a crispy chicken fillet and creamy mayo, sandwiched between warm, toasted bun.',
              img: burger
            },
          },
          { 
            name: 'Grilled Chicken Sandwich',
            details: {
              price: '6.49',
              description: 'Grilled Chicken Sandwich made with juicy grilled chicken, fresh lettuce, creamy mayo, and a toasted bun.',
              img: burger
            },
          },
          { 
            name: 'Bacon Ranch Grilled Chicken Sandwich',
            details: {
              price: '7.49',
              description: 'Bacon Ranch Grilled Chicken Sandwich made with juicy grilled chicken, crisp bacon, ranch sauce, and a toasted bun.',
              img: burger
            },
          },
          { 
            name: 'Double Cheeseburger',
            details: {
              price: '8.49',
              description: 'Double Cheeseburger with two 100% pure beef patties, two slices of American cheese, ketchup, mustard, pickles, and onions.',
              img: burger
            },
          },
          { 
            name: 'McDouble',
            details: {
              price: '7.99',
              description: 'McDouble with two 100% pure beef patties, seasoned with a pinch of salt and pepper, slivered onions, tangy pickles, ketchup, mustard, and a slice of melty American cheese.',
              img: burger
            },
          },
          { 
            name: 'Bacon McDouble',
            details: {
              price: '8.49',
              description: 'Bacon McDouble with two savory hot beef patties, topped with Applewood smoked bacon, onions, ketchup, mustard, and pickles.',
              img: burger
            },
          },
        ],
      }, {
        id: 'menu4',
        title: 'Salads',
        items: [
          { 
            name: 'Caesar Salad',
            details: {
              price: '6.99',
              description: 'Fresh lettuce, parmesan cheese, croutons, and Caesar dressing.',
              img: saladMC
            },
          },
          { 
            name: 'Side Salad',
            details: {
              price: '2.99',
              description: 'Fresh lettuce, mixed greens, cherry tomatoes, and your choice of dressing.',
              img: saladMC
            },
          },
          { 
            name: 'Southwest Grilled Chicken Salad',
            details: {
              price: '8.49',
              description: 'Grilled chicken, mixed greens, black beans, roasted corn, tomatoes, and Southwest ranch dressing.',
              img: saladMC
            },
          },
          { 
            name: 'Bacon Ranch Salad',
            details: {
              price: '7.99',
              description: 'Grilled chicken, bacon, mixed greens, tomatoes, shredded cheese, and ranch dressing.',
              img: saladMC
            },
          },
          { 
            name: "Fruit 'N Yogurt Parfait",
            details: {
              price: '3.49',
              description: 'Low-fat vanilla yogurt layered with strawberries, blueberries, and granola.',
             
            },
          },
          { 
            name: 'Apple Slices',
            details: {
              price: '1.99',
              description: 'Fresh, crisp apple slices.',
              img: appleslicesMC
              
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
                description: 'A classic cheeseburger, small fries, and your choice of a small drink or apple slices.',
                img: happpymeal
              },
            },
            { 
              name: 'Happy Meal Nuggets',
              details: {
                price: '6.49',
                description: '4-piece Chicken McNuggets, small fries, and your choice of a small drink or apple slices.',
                img: happpymeal
              },
            },
            { 
              name: 'Happy Meal McToast',
              details: {
                price: '5.99',
                description: 'Egg and cheese on a toasted English muffin, small fries, and your choice of a small drink or apple slices.',
                img: happpymeal
              },
            },
            { 
              name: 'Happy Meal Hamburger',
              details: {
                price: '5.99',
                description: 'A classic hamburger, small fries, and your choice of a small drink or apple slices.',
                img: happpymeal
              },
            },
            { 
              name: 'McChicken with Pickles',
              details: {
                price: '4.99',
                description: 'A McChicken sandwich with pickles.',
                img: happpymeal
              },
            },
            { 
              name: 'Apple Slices',
              details: {
                price: '1.99',
                description: 'Fresh, crisp apple slices.',
                img: appleslicesMC
              },
            },
          ],
        }, {
          id: 'menu6',
          title: 'Desserts',
          items: [
            { 
              name: 'McFlurry',
              details: {
                price: '3.99',
                description: 'Soft-serve ice cream blended with your choice of mix-ins.',
                img: dessertMC
              },
            },
            { 
              name: 'Apple Pie',
              details: {
                price: '1.49',
                description: 'Warm, flaky pie crust filled with cinnamon-spiced apples.',
                img: dessertMC
              },
            },
            { 
              name: 'Sundae',
              details: {
                price: '2.29',
                description: 'Soft-serve vanilla ice cream topped with your choice of hot fudge, caramel, or strawberry sauce.',
                img: dessertMC
              },
            },
            { 
              name: 'Chocolate Shake',
              details: {
                price: '3.49',
                description: 'Creamy chocolate shake made with our soft-serve ice cream and milk.',
                img: dessertMC
              },
            },
            { 
              name: 'Hot Fudge Sundae',
              details: {
                price: '2.49',
                description: 'Soft-serve vanilla ice cream topped with hot fudge sauce and a maraschino cherry.',
                img: dessertMC
              },
            },
            { 
              name: 'Soft-Serve Cone',
              details: {
                price: '1.00',
                description: 'Creamy soft-serve vanilla ice cream in a crispy cone.',
                img: dessertMC
              },
            },
          ]
        }, {
          id: 'menu7',
          title: 'Drinks',
          items: [
            { 
              name: 'Coca-Cola',
              details: {
                price: '1.99',
                description: 'Classic Coca-Cola soda.',
                img: colaMC
              }
            },
            { 
              name: 'Sprite',
              details: {
                price: '1.99',
                description: 'Refreshing lemon-lime soda.',
                img: spriteMC
              }
            },
            { 
              name: 'Fanta',
              details: {
                price: '1.99',
                description: 'Fruity orange soda.',
                img: fantaMC
              }
            },
            { 
              name: 'Iced Coffee',
              details: {
                price: '2.49',
                description: 'Chilled coffee served over ice cubes.',
                img: cappucinoMC
              }
            },
            { 
              name: 'Sweet Tea',
              details: {
                price: '1.79',
                description: 'Refreshing sweetened tea.',
                img: sweetTea
              }
            },
            { 
              name: 'Mocha Frappé',
              details: {
                price: '3.49',
                description: 'Creamy and indulgent blended coffee beverage.',
                img: mocchaMC
              }
            }
          ]
        },
        
     ],
  },
  {
    id: 2,
    title: 'KFC',
    menu: [
      {
        id: 'menu1',
        title: 'Burgers & Wraps Menus',
        items: [
          { 
            name: 'Menu Bacon Twister Sweet',
            details: {
              price: '9.99',
              description: 'Crispy, juicy chicken seasoned with a special blend of 11 herbs and spices.',
              img: KFCwrapMenu
            },
          },
          { 
            name: 'Menu Bacon Twister Spicy',
            details: {
              price: '8.49',
              description: 'A spicy, crunchy chicken fillet, topped with lettuce and mayo, served in a soft bun.',
              img: KFCwrapMenu
            },
          },
          { 
            name: 'Menu Chicken Zinger',
            details: {
              price: '7.99',
              description: 'A hot and spicy chicken burger with lettuce and mayo, served in a soft bun.',
              img: KFCburgerMenu
            },
          },
          { 
            name: 'Menu Colonel Burger',
            details: {
              price: '6.99',
              description: 'A classic chicken burger with lettuce, mayo, and a slice of cheese, served in a soft bun.',
              img: KFCburgerMenu
            },
          },
          { 
            name: 'Menu Big Crunch',
            details: {
              price: '8.99',
              description: 'A crunchy chicken fillet topped with lettuce and mayo, served in a sesame seed bun.',
              img: KFCwrapMenu
            },
          },
          { 
            name: 'Menu Zinger Stacker',
            details: {
              price: '10.99',
              description: 'Two spicy Zinger fillets, cheese, lettuce, and mayo, served in a soft bun.',
              img: KFCburgerMenu
            },
          },
          { 
            name: 'Menu Twister Combo',
            details: {
              price: '11.99',
              description: 'A Twister wrap, regular fries, and a drink of your choice.',
              img: KFCwrapMenu
            },
          },
          { 
            name: 'Menu Tower Burger',
            details: {
              price: '9.49',
              description: 'A tower of two chicken fillets, cheese, lettuce, and mayo, served in a soft bun.',
              img: KFCburgerMenu
            },
          },
        ],
      },
      {
        id: 'menu2',
        title: 'Burgers and Wraps',
        items: [
          { 
            name: 'Colonel Bucket',
            details: {
              price: '21.99',
              description: 'A bucket filled with a variety of chicken pieces, perfect for sharing.',
              img: kfcbucket
            },
          },
          { 
            name: 'Zinger Wrap',
            details: {
              price: '7.99',
              description: 'A spicy Zinger chicken fillet wrapped in a tortilla with lettuce and mayo.',
              img: kfcwrap
            },
          },
          { 
            name: 'Twister Wrap',
            details: {
              price: '8.49',
              description: 'A delicious combination of crispy chicken strips, lettuce, and mayo, wrapped in a warm tortilla.',
              img: kfcwrap
            },
          },
          { 
            name: 'Chicken Burger',
            details: {
              price: '5.99',
              description: 'A classic chicken burger with lettuce and mayo, served in a soft bun.',
              img: kfcburger
            },
          },
          { 
            name: 'Zinger Burger',
            details: {
              price: '6.49',
              description: 'A spicy Zinger chicken fillet topped with lettuce and mayo, served in a soft bun.',
              img: kfcburger
            },
          },
          { 
            name: 'Double Down Burger',
            details: {
              price: '8.99',
              description: 'Two tasty chicken fillets, bacon, and cheese sandwiched between two pieces of bread.',
              img: kfcburger
            },
          },
          { 
            name: 'Grilled Wrap',
            details: {
              price: '7.49',
              description: 'A grilled chicken fillet wrapped in a tortilla with lettuce and mayo.',
              img: kfcwrap
            },
          },
        ],
      }, {
        id: 'menu3',
        title: 'KFC Boxes',
        items: [
          { 
            name: 'Family Feast',
            details: {
              price: '29.99',
              description: 'A feast for the whole family! Includes a variety of chicken pieces, fries, coleslaw, and drinks.',
              img: kfcbox
            },
          },
          { 
            name: 'Party Bucket',
            details: {
              price: '39.99',
              description: 'Perfect for parties or gatherings! Comes with a large bucket of chicken pieces, sides, and drinks.',
              img: kfcbox
            },
          },
          { 
            name: 'Mega Box',
            details: {
              price: '19.99',
              description: 'A mega meal for one! Includes a generous serving of chicken, fries, a side, and a drink.',
              img: kfcbox
            },
          },
          { 
            name: 'Big Box Meal',
            details: {
              price: '14.99',
              description: 'A satisfying meal for one! Comes with chicken, fries, a side, a biscuit, and a drink.',
              img: kfcbox
            },
          },
          { 
            name: 'Snack Box',
            details: {
              price: '7.99',
              description: 'A quick snack on the go! Includes a small portion of chicken, fries, and a drink.',
              img: kfcbox
            },
          },
          { 
            name: 'Kids Box',
            details: {
              price: '4.99',
              description: 'A special meal for kids! Includes a mini burger or chicken nuggets, fries, a side, and a drink.',
              img: kfcbox
            },
          },
        ],
      },{
        id: 'menu4',
        title: 'Chicken Strips',
        items: [
          { 
            name: 'Original Recipe Chicken Strips',
            details: {
              price: '8.99',
              description: 'Juicy chicken strips coated in KFC\'s original recipe seasoning.',
              img: kfcstrips
            },
          },
          { 
            name: 'Spicy Chicken Strips',
            details: {
              price: '9.49',
              description: 'Tender chicken strips with a spicy kick, perfect for those who like it hot!',
              img: kfcwings
            },
          },
          { 
            name: 'BBQ Chicken Strips',
            details: {
              price: '9.99',
              description: 'Chicken strips smothered in tangy BBQ sauce, for a finger-licking good time.',
              img: kfcstrips
            },
          },
          { 
            name: 'Honey Mustard Chicken Strips',
            details: {
              price: '9.99',
              description: 'Chicken strips dipped in sweet honey mustard sauce, a delicious combination of flavors.',
              img: kfcwings
            },
          },
          { 
            name: 'Buffalo Chicken Strips',
            details: {
              price: '10.49',
              description: 'Spicy buffalo sauce meets crispy chicken strips, a fiery delight!',
              img: kfcstrips
            },
          },
          { 
            name: 'Garlic Parmesan Chicken Strips',
            details: {
              price: '10.99',
              description: 'Savory garlic parmesan sauce paired with tender chicken strips, a match made in heaven.',
              img: kfcwings
            },
          },
          { 
            name: 'Sweet Chili Chicken Strips',
            details: {
              price: '10.99',
              description: 'Sweet and tangy chili sauce drizzled over crispy chicken strips, a flavor explosion!',
              img: kfcstrips
            },
          },
        ],
      },{
        id: 'menu5',
        title: 'Drinks',
        items: [
          { 
            name: 'Pepsi',
            details: {
              price: '1.99',
              description: 'Refreshing Pepsi cola.',
              img: kfcpepsi
            },
          },
          { 
            name: 'Diet Pepsi',
            details: {
              price: '1.99',
              description: 'Zero-calorie Diet Pepsi.',
              img: kfcdietpepsi
            },
          },
          { 
            name: 'Mountain Dew',
            details: {
              price: '1.99',
              description: 'The citrus-flavored Mountain Dew soda.',
              img: kfcmountaindew
            },
          },
          { 
            name: 'Lipton Iced Tea',
            details: {
              price: '2.49',
              description: 'Cool and refreshing Lipton Iced Tea.',
              img: kfclipton
            },
          },
          { 
            name: 'Tropicana Orange Juice',
            details: {
              price: '2.49',
              description: '100% pure Tropicana Orange Juice.',
              img: kfcorange
            },
          },
          { 
            name: 'Aquafina Bottled Water',
            details: {
              price: '1.49',
              description: 'Pure and refreshing Aquafina Bottled Water.',
              img: kfcwater
            },
          },
          { 
            name: 'Brisk Raspberry Iced Tea',
            details: {
              price: '2.49',
              description: 'Brisk Raspberry Iced Tea.',
              img: kfcbrisk
            },
          },
          { 
            name: 'Hot Chocolate',
            details: {
              price: '2.49',
              description: 'Creamy and indulgent Hot Chocolate.',
              img: kfchotchocalate
            },
          },
        ],
      }
      
      
      
    ]
  },
];

export default RestaurantData;
