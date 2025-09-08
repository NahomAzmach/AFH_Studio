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
import Features from "./pages/features";
import Pricing from "./pages/pricing";
import CaseStudies from "./pages/case-studies";
import About from "./pages/about";
import Contact from "./pages/contact";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import NotFound from "@/pages/not-found";
import CedarGroveTemplate from "./pages/templates/cedar-grove";
import MapleStoneTemplate from "./pages/templates/maple-stone";
import SunriseOrchardTemplate from "./pages/templates/sunrise-orchard";
import BluebirdHavenTemplate from "./pages/templates/bluebird-haven";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
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
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route component={NotFound} />
        </Switch>
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
