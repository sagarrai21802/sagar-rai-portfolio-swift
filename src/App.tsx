import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";
import IntroAnimation from "./components/IntroAnimation";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import OpenSource from "./components/OpenSource";
import OpenSourceDetail from "./pages/OpenSourceDetail";
import Experience from "./pages/Experience";
import SkillsPage from "./pages/Skills";
import EducationPage from "./pages/Education";
import ContactPage from "./pages/Contact";
import ApplicationsPage from "./pages/Applications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(() => {
    // Show intro on home page every time
    return location.pathname === '/';
  });
  const [introCompleted, setIntroCompleted] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroCompleted(true);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <Layout>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home introCompleted={introCompleted} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/open-source/:contributionId" element={<OpenSourceDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

