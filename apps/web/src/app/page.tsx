import type { Metadata } from "next";
import { HomeView } from "@/components/views/home-view";

export const metadata: Metadata = {
  alternates: {
    languages: { es: "/", en: "/en" },
  },
};

export default function Home() {
  return <HomeView locale="es" />;
}
