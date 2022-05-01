import HomePage from "./components/homepage.js";
import ReviewPageTop from "./components/review_page_top.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cafe_3" element={<ReviewPageTop cafe_type="cafe_3" />} />
        <Route
          path="crossroads"
          element={<ReviewPageTop cafe_type="crossroads" />}
        />
        <Route
          path="foothill"
          element={<ReviewPageTop cafe_type="foothill" />}
        />
        <Route
          path="clark_kerr_campus"
          element={<ReviewPageTop cafe_type="clark_kerr_campus" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
