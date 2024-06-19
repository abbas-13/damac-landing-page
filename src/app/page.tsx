"use client";

import Cover from "@/app/components/Cover";
import Promotions from "./components/Promotions";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Cover />
      <Promotions />
      <Features />
      <Showcase />
      <Footer />
    </main>
  );
}
