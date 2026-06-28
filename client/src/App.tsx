import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./hooks/use-theme";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import PreviewModal from "./components/ui/preview-modal";
import Home from "./pages/home";
import Templates from "./pages/templates";

const Features = lazy(() => import("./pages/features"));
const Pricing = lazy(() => import("./pages/pricing"));
const CaseStudies = lazy(() => import("./pages/case-studies"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const PlanMySite = lazy(() => import("./pages/plan-my-site"));
const Privacy = lazy(() => import("./pages/privacy"));
const Terms = lazy(() => import("./pages/terms"));
const NotFound = lazy(() => import("@/pages/not-found"));
const CedarGroveTemplate = lazy(() => import("./pages/templates/cedar-grove"));
const MapleStoneTemplate = lazy(() => import("./pages/templates/maple-stone"));
const SunriseOrchardTemplate = lazy(() => import("./pages/templates/sunrise-orchard"));
const BluebirdHavenTemplate = lazy(() => import("./pages/templates/bluebird-haven"));

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="py-32" />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/templates" component={Templates} />
            <Route path="/templates/cedar-grove" component={CedarGroveTemplate} />
            <Route path="/templates/maple-stone" component={MapleStoneTemplate} />
            <Route path="/templates/sunrise-orchard" component={SunriseOrchardTemplate} />
            <Route path="/templates/bluebird-haven" component={BluebirdHavenTemplate} />
            <Route path="/features" component={Features} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/case-studies" component={CaseStudies} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/plan-my-site" component={PlanMySite} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
      <PreviewModal />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
