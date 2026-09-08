import type { Metadata } from "next";
import { HomeView } from "@/components/views/home-view";
import { getDictionary } from "@/i18n";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.meta.title,
  description: dict.meta.homeDescription,
  alternates: {
    languages: { es: "/", en: "/en" },
  },
};

export default function EnglishHome() {
  return <HomeView locale="en" />;
}
