import { useState, useEffect, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";
import IntroAnimation from "./components/IntroAnimation";

const Home = lazy(() => import("./pages/Home"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const OpenSource = lazy(() => import("./components/OpenSource"));
const OpenSourceDetail = lazy(() => import("./pages/OpenSourceDetail"));
const Experience = lazy(() => import("./pages/Experience"));
const SkillsPage = lazy(() => import("./pages/Skills"));
const EducationPage = lazy(() => import("./pages/Education"));
const ContactPage = lazy(() => import("./pages/Contact"));
const ApplicationsPage = lazy(() => import("./pages/Applications"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
        <Suspense fallback={<div className="flex h-screen w-full items-center justify-center text-foreground">Loading...</div>}>
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
        </Suspense>
      </Layout>
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

