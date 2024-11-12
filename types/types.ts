import { LucideIcon } from "lucide-react";

export enum ItemFeatureType {
  NEW = "New",
  BESTSELLER = "Bestseller",
  LIMITED_EDITION = "Limited Edition",
  ECO_FRIENDLY = "Eco-Friendly",
  PREMIUM = "Premium",
}

export type ItemSpecification = {
  key: string;
  value: string;
  icon: LucideIcon;
};

export type Item = {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  features: ItemFeatureType[];
  images: string[];
  category: string;
  specifications: ItemSpecification[];
  createdAt: Date;
  stock: number;
  brand: string;
};
