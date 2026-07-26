export const menuCategories = [
  "Pizza",
  "Burgers",
  "Sandwiches",
  "Starters",
  "Chinese",
  "Biryani",
  "Mocktails"
];

export const menuData = [
  // PIZZA
  { id: 'p1', category: 'Pizza', name: 'Classic Margarita Pizza', price: 200, type: 'veg', description: 'Pizza Sauce, Mozzarella Cheese, Basil, Olives' },
  { id: 'p2', category: 'Pizza', name: 'Veggie (Mix Veg) Pizza', price: 200, type: 'veg', description: 'Pizza Sauce, Mozzarella Cheese, Onion, Capsicum' },
  { id: 'p3', category: 'Pizza', name: 'Golden Corn Pizza', price: 200, type: 'veg', description: 'Pizza Sauce, Cheese, Onion, Corn, Jalapeño' },
  { id: 'p4', category: 'Pizza', name: 'Paneer Tikka Pizza', price: 230, type: 'veg', description: 'Pizza Sauce, Cheese, Onion, Capsicum, Tandoori Paneer' },
  { id: 'p5', category: 'Pizza', name: 'Chicken Cheese Pizza', price: 230, type: 'nonveg', description: 'Pizza Sauce, Cheese, Onion, Capsicum, Grilled Chicken' },
  { id: 'p6', category: 'Pizza', name: 'Barbecue Chicken Pizza', price: 230, type: 'nonveg', description: 'Pizza Sauce, Cheese, Onion, Capsicum, BBQ Chicken' },
  { id: 'p7', category: 'Pizza', name: 'Flaming Hot Chicken Pizza', price: 250, type: 'nonveg', description: 'Pizza Sauce, Cheese, Onion, Jalapeño, Paprika, Chicken' },
  { id: 'p8', category: 'Pizza', name: 'Chicken Loaded Pizza', price: 280, type: 'nonveg', description: 'Pizza Sauce, Cheese, Onion, Bell peppers, Chicken, Olives' },
  
  // BURGERS
  { id: 'b1', category: 'Burgers', name: 'Aloo Tikki Burger', price: 90, type: 'veg', description: 'Burger Buns, Onion, Tomato, Aloo Tikki Patty' },
  { id: 'b2', category: 'Burgers', name: 'Veg Cheese Burger', price: 100, type: 'veg', description: 'Burger Buns, Onion, Tomato, Veg Patty, Cheese Slice' },
  { id: 'b3', category: 'Burgers', name: 'Crispy Paneer Burger', price: 140, type: 'veg', description: 'Burger Buns, Onion, Tomato, Paneer Patty, Cheese Slice' },
  { id: 'b4', category: 'Burgers', name: 'Chicken Cheese Burger', price: 120, type: 'nonveg', description: 'Burger Buns, Onion, Tomato, Chicken Patty, Cheese Slice' },
  { id: 'b5', category: 'Burgers', name: 'Chicken Popcorn Burger', price: 130, type: 'nonveg', description: 'Burger Buns, Onion, Tomato, Chicken Popcorn, Cheese' },
  { id: 'b6', category: 'Burgers', name: 'Chicken Maharaja Burger', price: 150, type: 'nonveg', description: 'Burger Buns, Onion, Tomato, 2 Chicken Patty, 2 Cheese' },
  
  // SANDWICHES
  { id: 's1', category: 'Sandwiches', name: 'Cheese Grilled Sandwich', price: 100, type: 'veg', description: 'Plain vegetable S/W with Onion, Tomato, Cucumber, Potatoes & Cheese' },
  { id: 's2', category: 'Sandwiches', name: 'Tandoor Paneer Sandwich', price: 120, type: 'veg', description: 'A bit tangy and spicy Tandoori Paneer Sandwiches' },
  { id: 's3', category: 'Sandwiches', name: 'Chicken Cheese Sandwich', price: 100, type: 'nonveg', description: 'Sandwich filled with Onion, Capsicum & Garlic Chicken' },
  { id: 's4', category: 'Sandwiches', name: 'Tandoori Chicken Sandwich', price: 120, type: 'nonveg', description: 'Sandwich filled with Onion, Capsicum & Tandoori Chicken' },

  // STARTERS
  { id: 'st1', category: 'Starters', name: 'Veg Manchurian', price: 180, type: 'veg' },
  { id: 'st2', category: 'Starters', name: 'Paneer Chilly', price: 220, type: 'veg' },
  { id: 'st3', category: 'Starters', name: 'Paneer Tikka', price: 250, type: 'veg' },
  { id: 'st4', category: 'Starters', name: 'Chicken Chilly', price: 200, type: 'nonveg' },
  { id: 'st5', category: 'Starters', name: 'Chicken Lollipop Dry', price: 200, type: 'nonveg' },
  { id: 'st6', category: 'Starters', name: 'Chicken Tikka', price: 250, type: 'nonveg' },
  { id: 'st7', category: 'Starters', name: 'Chicken Banjara Tikka', price: 250, type: 'nonveg' },

  // CHINESE (Noodles & Rice)
  { id: 'c1', category: 'Chinese', name: 'Veg Fried Rice', price: 140, type: 'veg' },
  { id: 'c2', category: 'Chinese', name: 'Veg Hakka Noodles', price: 140, type: 'veg' },
  { id: 'c3', category: 'Chinese', name: 'Veg Schezwan Rice', price: 150, type: 'veg' },
  { id: 'c4', category: 'Chinese', name: 'Chicken Fried Rice', price: 160, type: 'nonveg' },
  { id: 'c5', category: 'Chinese', name: 'Chicken Hakka Noodles', price: 160, type: 'nonveg' },
  { id: 'c6', category: 'Chinese', name: 'Chicken Schezwan Noodles', price: 170, type: 'nonveg' },
  { id: 'c7', category: 'Chinese', name: 'Chicken Tripple Schezwan Rice', price: 250, type: 'nonveg' },

  // BIRYANI
  { id: 'bi1', category: 'Biryani', name: 'Veg Biryani', price: 180, type: 'veg' },
  { id: 'bi2', category: 'Biryani', name: 'Paneer Biryani', price: 200, type: 'veg' },
  { id: 'bi3', category: 'Biryani', name: 'Chicken Dum Biryani', price: 200, type: 'nonveg' },
  { id: 'bi4', category: 'Biryani', name: 'Chicken Tikka Biryani', price: 230, type: 'nonveg' },
  { id: 'bi5', category: 'Biryani', name: 'Mutton Dum Biryani', price: 300, type: 'nonveg' },

  // MOCKTAILS
  { id: 'm1', category: 'Mocktails', name: 'Classic Mojito', price: 120, type: 'veg' },
  { id: 'm2', category: 'Mocktails', name: 'Watermelon Mojito', price: 120, type: 'veg' },
  { id: 'm3', category: 'Mocktails', name: 'Oreo Shake', price: 150, type: 'veg' },
];
