import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Arctic Tundra 45',
    price: 299.99,
    description: 'The ultimate camping companion. Keeps ice frozen for up to 7 days in sweltering heat. Rotomolded construction for bear-resistant durability.',
    image: 'https://picsum.photos/id/200/500/500',
    category: 'hard',
    features: ['Rotomolded Construction', 'Bear Resistant', 'Non-Slip Feet', 'Vortex Drain System'],
    capacity: '45 Liters / 28 Cans',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Glacier Trek Soft 30',
    price: 179.99,
    description: 'Lightweight, leakproof, and ready for adventure. Perfect for day trips to the beach or hiking trails.',
    image: 'https://picsum.photos/id/201/500/500',
    category: 'soft',
    features: ['Leakproof Zipper', 'High-Density Insulation', 'Shoulder Strap', 'MOLLE Webbing'],
    capacity: '30 Liters / 20 Cans',
    rating: 4.7
  },
  {
    id: '3',
    name: 'Polar Volt Electric Cooler',
    price: 449.99,
    description: 'No ice needed. Plugs into your car or portable battery to keep contents actively cooled down to -4°F.',
    image: 'https://picsum.photos/id/202/500/500',
    category: 'electric',
    features: ['Active Compressor Cooling', 'LCD Temperature Control', 'Low Power Consumption', 'Interior LED Light'],
    capacity: '35 Liters',
    rating: 4.8
  },
  {
    id: '4',
    name: 'Summit Tumbler 20oz',
    price: 29.99,
    description: 'Double-wall vacuum insulation keeps your coffee hot or your cocktail ice cold for hours.',
    image: 'https://picsum.photos/id/203/500/500',
    category: 'drinkware',
    features: ['MagSlider Lid', 'Dishwasher Safe', 'Stainless Steel', 'No Sweat Design'],
    capacity: '20 oz',
    rating: 4.6
  },
  {
    id: '5',
    name: 'Arctic Haul 65',
    price: 399.99,
    description: 'Massive capacity on wheels. The first cooler of its kind to be tough enough for the Tundra name.',
    image: 'https://picsum.photos/id/204/500/500',
    category: 'hard',
    features: ['NeverFlat Wheels', 'StrongArm Handle', 'PermaFrost Insulation', 'LipGrip Handles'],
    capacity: '65 Liters / 45 Cans',
    rating: 4.9
  },
  {
    id: '6',
    name: 'Daytripper Lunch Box',
    price: 79.99,
    description: 'Keeps your lunch fresh and safe. Water-resistant exterior and easy-to-clean liner.',
    image: 'https://picsum.photos/id/206/500/500',
    category: 'soft',
    features: ['ThermoSnap Closure', 'ColdCell Flex Insulation', 'Food Safe', 'Water Resistant'],
    capacity: '5 Liters',
    rating: 4.5
  }
];
