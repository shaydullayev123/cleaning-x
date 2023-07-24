import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero-section/HeroSection";
import AboutSection from "../components/About-section/AboutSection";
import ServicesSection from "../components/Services-section/ServicesSection";
import AdSection from "../components/Advertisemen-section/AdSection";
import ArticlesSection from "../components/Articles-section/ArticlesSection";
import ContactSection from "../components/Contact-section/ContactSection";
import FooterSection from "../components/Footer/Footer";
import NavFooter from "../components/Nav-footer/NavFooter";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AdSection />
        <ArticlesSection />
        <ContactSection />
        <FooterSection />
        <NavFooter />
      </div>
    );
  }
}

export default HomePage;
