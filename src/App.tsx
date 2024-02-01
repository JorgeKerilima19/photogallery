import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import { HomePage, ProfilePage } from "./components/pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;
