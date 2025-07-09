import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Franchises from "./pages/Franchises";
import Consoles from "./pages/Consoles";
import Designers from "./pages/Designers";
import DesignerDetail from "./pages/DesignerDetail";
import SnakeGame from "./pages/SnakeGame";
import NotFound from "./pages/NotFound";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";
import FranchiseDetail from "./pages/FranchiseDetail";
import SubmitArticle from "./pages/SubmitArticle";
import Favorites from "./pages/Favorites";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/franchises" element={<Franchises />} />
            <Route path="/franchises/:title" element={<FranchiseDetail />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
            <Route path="/consoles" element={<Consoles />} />
            <Route path="/designers" element={<Designers />} />
            <Route path="/designers/:id" element={<DesignerDetail />} />
            <Route path="/snake" element={<SnakeGame />} />
            <Route path="/submit-article" element={<SubmitArticle />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;