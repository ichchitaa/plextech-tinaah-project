import FrontPage from "./components/FrontPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewPageTop from "./components/ReviewPageTop.js";
import FormPage from "./components/FormPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
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
        <Route path="review_form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
