import BusPlan from "./screens/admin/BusPlan";
import HomePage from "./screens/customer/HomePage";

import SearchResult from "./screens/customer/SearchResult";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/bus-plan" element={<BusPlan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
