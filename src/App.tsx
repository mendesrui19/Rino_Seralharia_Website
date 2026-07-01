import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LocationPage } from "./components/pages/LocationPage";
import { locationPages } from "./lib/seo-data";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {locationPages.map((page) => (
        <Route key={page.slug} path={page.path} element={<LocationPage page={page} />} />
      ))}
    </Routes>
  );
}

export default App;
