export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  stock: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Desk Lamp",
    description: "A sleek, adjustable LED desk lamp with three brightness levels. Machined aluminum body with a matte black finish. Perfect for focused work sessions.",
    price: 89.99,
    currency: "USD",
    stock: 12,
    category: "Lighting",
    image: "/lamp.svg",
  },
  {
    id: "2",
    name: "Ceramic Pour-Over Set",
    description: "Hand-thrown ceramic dripper and server in speckled stoneware. Includes a reusable stainless steel filter. Brews 2-4 cups.",
    price: 64.0,
    currency: "USD",
    stock: 0,
    category: "Kitchen",
    image: "/ceramic.svg",
  },
  {
    id: "3",
    name: "Merino Wool Blanket",
    description: "Lightweight yet warm blanket knit from 100% New Zealand merino wool. Naturally temperature-regulating and machine washable.",
    price: 195.0,
    currency: "USD",
    stock: 3,
    category: "Home",
    image: "/blanket.svg",
  },
  {
    id: "4",
    name: "Walnut Cutting Board",
    description: "End-grain walnut cutting board, hand-finished with food-safe mineral oil. Measures 18 x 12 inches. Built to last generations.",
    price: 120.0,
    currency: "USD",
    stock: 7,
    category: "Kitchen",
    image: "/board.svg",
  },
  {
    id: "5",
    name: "Brass Desk Organizer",
    description: "Solid brass organizer with compartments for pens, cards, and small items. Develops a natural patina over time.",
    price: 75.0,
    currency: "USD",
    stock: 1,
    category: "Office",
    image: "/organizer.svg",
  },
  {
    id: "6",
    name: "Linen Notebook Set",
    description: "Set of three cloth-bound notebooks with lay-flat binding. 80gsm cream paper, dot grid. A5 size.",
    price: 32.0,
    currency: "USD",
    stock: 24,
    category: "Office",
    image: "/notebook.svg",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
