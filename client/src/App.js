import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, ArticleList, Article, NotFound } from "./pages";
import { Navbar } from "./components";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article-list" element={<ArticleList />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
