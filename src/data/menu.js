// PUNO Kitchen & Cafe — menu, transcribed from the printed menu.
// Prices are in Philippine Peso (PHP). Subject to a 5% service charge.

export const SERVICE_NOTE = 'All prices in PHP. Subject to a 5% service charge.'

export const menu = [
  {
    id: 'sharing',
    label: 'Sharing Plates',
    kicker: 'Ala carte — perfect for sharing between 2 to 3 people',
    items: [
      {
        name: 'Pork Belly Kare-Kare',
        price: 450,
        desc: 'Crispy pork belly and tender tripe in a creamy peanut sauce, served with vegetables and bagoong.',
        tag: 'Signature',
      },
      {
        name: 'Puno Crispy Sisig',
        price: 350,
        desc: 'Crispy pork with chicken liver sauce and a poached egg — a bold Filipino favorite.',
        tag: 'Signature',
      },
      {
        name: 'Crispy Pork Dinuguan',
        price: 450,
        desc: 'Savory pork blood stew with tender pork belly, slow-cooked in garlic, vinegar, and chili.',
      },
      {
        name: 'Dinakdakan',
        price: 450,
        desc: 'Grilled chopped pork with onions, chili, and a creamy tangy dressing — smoky and spicy.',
      },
      {
        name: 'Grilled Pork Sinigang',
        price: 480,
        desc: 'Smoky grilled pork simmered in a tangy tamarind broth with fresh vegetables.',
      },
      {
        name: 'Pork Binagoongan',
        price: 380,
        desc: 'Tender pork sauteed in savory shrimp paste with garlic, onions, and chili.',
      },
      {
        name: 'Chicken Tinola sa Gata',
        price: 450,
        desc: 'Filipino chicken soup simmered in coconut milk with ginger and vegetables.',
      },
      {
        name: 'Boneless Chicken Platter',
        price: 450,
        desc: 'Golden, juicy boneless chicken served with gravy and garlic rice.',
      },
      {
        name: 'Salted Egg Wings',
        price: 380,
        desc: 'Crispy chicken wings coated in buttery salted egg sauce, served with creamy garlic aioli.',
      },
      {
        name: 'Honey Patis Wings',
        price: 350,
        desc: 'Crispy chicken wings glazed with a sweet and salty honey-patis sauce.',
      },
      {
        name: 'Buffalo Wings',
        price: 350,
        desc: 'Spicy buffalo wings served with creamy garlic aioli.',
      },
      {
        name: 'Gising-Gising',
        price: 350,
        desc: 'Creamy, slightly spicy chopped vegetables sauteed with ground meat and coconut milk.',
      },
      {
        name: 'Vegetable Kare-Kare',
        price: 350,
        desc: 'Mixed vegetables in a rich, creamy peanut sauce, served with bagoong on the side.',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    kicker: 'Served with rice, buttered corn & carrots, and camote chips',
    items: [
      {
        name: 'Grilled Liempo',
        price: 340,
        desc: 'Pork belly marinated in classic spices, grilled for a smoky bite with a crisp charred finish.',
      },
      {
        name: 'Chicken Inasal',
        price: 340,
        desc: 'Grilled calamansi-lemongrass chicken thigh, marinated with garlic and annatto.',
      },
      {
        name: 'Boneless Fried Chicken',
        price: 340,
        desc: 'Crispy, juicy boneless chicken tossed in sweet-and-spicy honey sriracha, with garlic aioli.',
      },
      {
        name: 'Bistek Tagalog',
        price: 340,
        desc: 'Deep-fried beef slices topped with sauteed onions and a tangy calamansi sauce.',
      },
      {
        name: 'Beef Adobo',
        price: 340,
        desc: 'Tender beef braised in soy sauce, vinegar, garlic, spices, and bay leaves.',
      },
      {
        name: 'Roasted Beef in Mushroom Sauce',
        price: 360,
        desc: 'Slow-roasted beef slices in a rich, creamy mushroom sauce.',
      },
      {
        name: 'Chicken BBQ Skewers',
        price: 340,
        desc: 'Marinated chicken skewers glazed in smoky-sweet barbecue sauce, with a creamy peanut dip.',
      },
      {
        name: 'Shanghai Shrimp Rolls',
        price: 350,
        desc: 'Crispy golden rolls of seasoned shrimp and vegetables, with a sweet chili dip.',
      },
      {
        name: 'Salmon Teriyaki',
        price: 400,
        desc: 'Grilled salmon glazed with sweet-savory teriyaki, served with a fresh green salad.',
      },
      {
        name: 'Fish and Chips',
        price: 340,
        desc: 'Crispy golden fish fillets in light beer batter, with fries and tangy tartar sauce.',
      },
    ],
  },
  {
    id: 'fish',
    label: 'Fish & Steak',
    kicker: 'From the grill and the deep',
    items: [
      {
        name: 'USDA Prime Ribeye Steak',
        price: 1700,
        desc: '300 grams of USDA Prime ribeye, served with a potato wedge and pepper sauce.',
        tag: 'Premium',
      },
      {
        name: 'Sinigang na Salmon Head with Buko & Lychee',
        price: 490,
        desc: 'Salmon head in a savory miso broth, accented with coconut and sweet lychee.',
      },
      {
        name: 'Grilled Bangus',
        price: 380,
        desc: 'Grilled milkfish with smoky charred eggplant salad, tomatoes, onions, and tangy vinegar.',
      },
      {
        name: 'Cheesy Grilled Bangus',
        price: 380,
        desc: 'Grilled milkfish topped with a melty three-cheese blend for a rich, savory twist.',
      },
      {
        name: 'Grilled Bangus with Laing',
        price: 380,
        desc: 'Grilled milkfish with creamy, spicy laing of dried taro leaves in coconut milk.',
      },
      {
        name: 'Grilled Blue Marlin in Lemon Butter',
        price: 380,
        desc: 'Grilled blue marlin steak with a zesty lemon butter sauce — light and buttery.',
      },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    kicker: 'Comfort, twirled',
    items: [
      {
        name: 'Shrimp Pasta Negra',
        price: 380,
        desc: 'Al dente pasta in a rich black squid-ink sauce blended with creamy shrimp marinara.',
        tag: 'Signature',
      },
      {
        name: 'Creamy Dijon Salmon Pasta',
        price: 400,
        desc: 'Black pasta in creamy Dijon mustard sauce with salmon, herbs, and a touch of citrus.',
      },
      {
        name: 'Truffle Pasta',
        price: 380,
        desc: 'Luxurious truffle cream pasta topped with rich, creamy queso de bola.',
      },
      {
        name: 'Cream Cheese Carbonara',
        price: 380,
        desc: 'Creamy pasta with smoky bacon, garlic, and a rich cream cheese sauce.',
      },
      {
        name: 'Pesto',
        price: 350,
        desc: 'Fresh basil pesto tossed with pasta and flavorful grilled chicken bits.',
      },
      {
        name: 'Bolognese',
        price: 320,
        desc: 'Hearty, slow-cooked meat sauce with tomatoes, garlic, onions, and Italian herbs.',
      },
      {
        name: 'Spicy Sardines',
        price: 320,
        desc: 'Sardines in a fiery sauce of chili, garlic, tomatoes, onions, and cheese.',
      },
    ],
  },
  {
    id: 'starters',
    label: 'Small Plates & Salads',
    kicker: 'To begin, and to share',
    items: [
      {
        name: 'Puno Nachos',
        price: 300,
        desc: 'House nachos piled with savory toppings and melted cheese.',
        tag: 'Signature',
      },
      { name: 'Truffle Fries', price: 250, desc: 'Golden fries dusted with truffle and parmesan.' },
      { name: 'Calamares', price: 350, desc: 'Crisp-fried squid rings with a tangy dip.' },
      { name: 'Chicken Fingers', price: 280, desc: 'Breaded chicken tenders, fried golden.' },
      { name: '3-Cheese Spinach Roll', price: 220, desc: 'Crisp rolls of spinach and three cheeses.' },
      { name: 'Onion Rings', price: 260, desc: 'Battered onion rings, fried to a crunch.' },
      { name: 'Marble Potato', price: 200, desc: 'Buttered, seasoned baby marble potatoes.' },
      {
        name: 'Caesar Salad',
        price: 320,
        desc: 'Classic Caesar tossed with crispy bacon bits for a smoky, savory twist.',
      },
      {
        name: 'Asian Salad',
        price: 380,
        desc: 'Fresh greens with tangy Asian dressing and grilled chicken breast bits.',
      },
    ],
  },
  {
    id: 'breakfast',
    label: 'All-Day Breakfast',
    kicker: 'Served with Java rice, double-yolk eggs, and atsara',
    items: [
      { name: 'Crispy Bagnet', price: 350, desc: 'Crackling-crisp pork belly, Ilocano style.' },
      { name: 'Salmon Belly Tocino', price: 350, desc: 'Sweet-cured salmon belly, pan-seared.' },
      { name: 'Beef Tapa', price: 350, desc: 'Savory-sweet cured beef, classic silog style.' },
      { name: 'Garlic Longganisa', price: 320, desc: 'House garlic pork sausage.' },
      { name: 'Daing na Bangus', price: 320, desc: 'Marinated milkfish, fried crisp.' },
    ],
  },
  {
    id: 'sweets',
    label: 'Sweets & Pastries',
    kicker: 'Whole cakes available upon request',
    items: [
      {
        name: 'Buko & Cheese Turon',
        price: 200,
        desc: 'Crisp turon with coconut and cheese, ube ice cream, and chocolate drizzle.',
        tag: 'Signature',
      },
      { name: 'Waffle & Chicken', price: 350, desc: 'Golden waffles and crispy chicken, butter and syrup.' },
      { name: 'Campfire Cheesecake', price: 220, desc: 'Per slice. Torched meringue over silken cheesecake.' },
      { name: 'Ube Creme Brulee Cake', price: 220, desc: 'Per slice. Ube custard with a caramelized crown.' },
      { name: 'Leche Flan', price: 105, desc: 'Silky caramel custard, the Filipino classic.' },
      { name: 'Affogato', price: 200, desc: 'Espresso poured over ice cream.' },
      { name: 'Pistachio Knafeh Bar', price: 220, desc: 'Crisp knafeh layered with pistachio.' },
    ],
  },
  {
    id: 'cafe',
    label: 'Cafe & Bar',
    kicker: 'Coffee, cold drinks, and a short bar',
    items: [
      { name: 'Spanish Latte', price: 190, desc: 'Espresso with sweetened milk.' },
      { name: 'Dirty Matcha', price: 190, desc: 'Stone-ground matcha pulled with espresso.' },
      { name: 'Caramel Macchiato', price: 180, desc: 'Espresso, steamed milk, caramel.' },
      { name: 'Hany Caramel Frappe', price: 200, desc: 'Blended caramel frappe, house favorite.' },
      { name: 'Iced Shaken Pomegranate Tea', price: 180, desc: 'Bright, shaken iced fruit tea.' },
      { name: 'Mango Fruit Shake', price: 220, desc: 'Fresh blended mango.' },
      { name: 'Red Mojito', price: 230, desc: 'Mint, lime, and berries over crushed ice.' },
      { name: 'Frozen Margarita', price: 210, desc: 'Classic frozen margarita.' },
      { name: 'House Wine — Cabernet Sauvignon', price: 1300, desc: 'Per bottle.' },
    ],
  },
]

// Highlighted promo from the printed menu.
export const familySet = {
  title: 'Family Set Meal',
  price: 1850,
  note: 'Perfect for sharing between 4 to 5 people. Save up to PHP 250.',
  sets: [
    {
      name: 'Set A',
      items: [
        '2 Java / Plain Rice for sharing',
        'Caesar Salad',
        'Puno Nachos',
        'Pork Binagoongan',
        'Sinigang na Salmon with buko & lychee',
        'Pasta (Bolognese or Spicy Sardines)',
      ],
    },
    {
      name: 'Set B',
      items: [
        '2 Java / Plain Rice for sharing',
        'Caesar Salad',
        'Puno Nachos',
        'Pork Belly Kare-Kare',
        'Crispy Pork Dinuguan',
        'Pasta (Bolognese or Spicy Sardines)',
      ],
    },
    {
      name: 'Set C',
      items: [
        '2 Java / Plain Rice for sharing',
        'Caesar Salad',
        'Puno Nachos',
        'Boneless Chicken Platter',
        'Choice of Bangus',
        'Pasta (Bolognese or Spicy Sardines)',
      ],
    },
    {
      name: 'Set D',
      items: [
        '2 Java / Plain Rice for sharing',
        'Caesar Salad',
        'Puno Nachos',
        'Puno Crispy Sisig',
        'Choice of Bangus',
        'Pasta (Bolognese or Spicy Sardines)',
      ],
    },
  ],
}

// The garden pavilion doubles as a private events venue.
export const venue = {
  name: 'The Glass Hall',
  specs: [
    { k: 'Capacity', v: 'Up to 60 guests' },
    { k: 'Use', v: '4-hour exclusive venue' },
    { k: 'Service', v: 'Buffet style' },
  ],
}
