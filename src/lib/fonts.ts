import {
  Poppins,
  Inter,
  Roboto,
  Open_Sans,
  Montserrat,
  Playfair_Display,
  Raleway,
  Lato,
  Nunito,
  Source_Sans_3,
  Merriweather,
  DM_Sans,
} from "next/font/google";
import type { NextFont } from "next/dist/compiled/@next/font";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  display: "swap",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fontMap: Record<string, NextFont> = {
  Poppins: poppins,
  Inter: inter,
  Roboto: roboto,
  "Open Sans": openSans,
  Montserrat: montserrat,
  "Playfair Display": playfairDisplay,
  Raleway: raleway,
  Lato: lato,
  Nunito: nunito,
  "Source Sans 3": sourceSans3,
  Merriweather: merriweather,
  "DM Sans": dmSans,
};

export function getFont(name: string): NextFont {
  return fontMap[name] || poppins;
}
