import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import GithubProjectsSection from "./GithubProjectsSection/GithubProjectsSection";
import LensesSection from "./LensesSection/LensesSection";
import Footer from "./Footer/Footer";
import PresentationPage from "./PresentationPage";

export default function App() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  return (
    <BrowserRouter>
     
      <Header language={language} setLanguage={setLanguage} />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero language={language} />
              <GithubProjectsSection language={language} />
              <LensesSection language={language} /> 
              <Footer language={language} />
            </>
          } 
        />

        <Route path="/apresentacao/:id" element={<PresentationPage />} />
      </Routes>
    </BrowserRouter>
  );
}