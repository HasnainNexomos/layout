"use client"
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import NewsletterSection from "./components/NewsletterSection";
import PopularProducts from "./components/PopularProducts";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
  <>
  <Navbar/>
  <HeroSection/>
  <FeaturesSection/>
  <ProductGrid/>
  <PopularProducts/>
  <NewsletterSection/>
  <AboutSection/>
  <Footer/>
  </> 
  );
}
