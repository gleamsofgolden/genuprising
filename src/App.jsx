import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import CivicLiteracyPage from '@/pages/CivicLiteracyPage.jsx';
import OpinionPage from '@/pages/OpinionPage.jsx';
import GlobalDemocracyPage from '@/pages/GlobalDemocracyPage.jsx';
import CulturePoliticsPage from '@/pages/CulturePoliticsPage.jsx';
import ArticlePage from '@/pages/ArticlePage.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--cream)] text-[var(--charcoal)]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/civic-literacy" element={<CivicLiteracyPage />} />
            <Route path="/opinion" element={<OpinionPage />} />
            <Route path="/global-democracy" element={<GlobalDemocracyPage />} />
            <Route path="/culture-politics" element={<CulturePoliticsPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
