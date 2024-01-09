import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import Library from "./pages/Library";
import BookByCategory from "./pages/BookByCategory";
import Preview from "./pages/Preview";
import PostByCategory from "./pages/PostByCategory";
import About from "./pages/About";
import GetInTouch from "./pages/GetInTouch";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post" element={<SinglePost />} />
        <Route path="/library" element={<Library />} />
        <Route path="/books-category" element={<BookByCategory />} />
        <Route path="/posts-category" element={<PostByCategory />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
      </Routes>
    </BrowserRouter>
  );
}

// Routes
// /blog - blog categories
// /post - individual blog post
// /library - books category
// /books-category - list books under specific category
// /posts-category - list posts under specific category
// /preview - book preview
// /about - about page
// /get-in-touch - get in touch
