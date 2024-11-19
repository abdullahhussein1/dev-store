import { Locale } from "@/types/types";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ku: () => import("./dictionaries/ku.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
