import "./assets/css/style.css";
import Header from "./components/Header";
import CategoriesPage from "./pages/CategoriesPage";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import RulPage from "./pages/RulPage.jsx";
import AmuPage from "./pages/AmuPage.jsx";
import SalePage from "./pages/SalePage.jsx";
import DosPage from "./pages/DosPage.jsx"; 
import {Routes, Route} from "react-router-dom";
import WowPage from "./pages/WowPage.jsx";







function App() {
  return (
    <div>
      <Header />
     <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetailPage  />} />
        <Route path="/categories" element={<CategoriesPage />} />
        
        <Route path="/rul/:id" element={<RulPage />} />
        <Route path="/amu" element={<AmuPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/dos" element={<DosPage />} />
        <Route path="/test/page/:id" element={<WowPage/>} />
      
      </Routes>
     </main>
    </div>
  );
}

export default App;
