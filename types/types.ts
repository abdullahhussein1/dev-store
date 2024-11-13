export enum ItemFeatureType {
  NEW = "New",
  BESTSELLER = "Bestseller",
  LIMITED_EDITION = "Limited Edition",
  ECO_FRIENDLY = "Eco-Friendly",
  PREMIUM = "Premium",
}

export enum ItemCondition {
  NEW = "New",
  REFURBISHED = "Refurbished",
  USED_LIKE_NEW = "Used - Like New",
  USED_VERY_GOOD = "Used - Very Good",
  USED_GOOD = "Used - Good",
  USED_ACCEPTABLE = "Used - Acceptable",
}

export type Key =
  | "CPU"
  | "RAM"
  | "OS"
  | "Storage"
  | "Display"
  | "Battery"
  | "Weight"
  | "Camera"
  | "GPU";

export type ItemSpecification = {
  key: Key;
  value: string;
};

export type Category =
  | "Laptop"
  | "Keyboard"
  | "Mouse"
  | "Hardware"
  | "Desk"
  | "Accessory"
  | "Desktop";

export type Color =
  | "White"
  | "Black"
  | "Blue"
  | "Red"
  | "Green"
  | "Purple"
  | "Navy"
  | "Yellow"
  | "Pink"
  | "Silver";

export type Item = {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  numberOfRatings: number;
  color: Color;
  features: ItemFeatureType[];
  images: string[];
  category: Category;
  specifications: ItemSpecification[];
  createdAt: Date;
  condition: ItemCondition;
  totalSold: number;
  stock: number;
  brand: string;
};
