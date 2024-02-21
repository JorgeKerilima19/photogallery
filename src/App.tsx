import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import { HomePage, ProfilePage } from "./components/pages";

const App = () => {
  return (
    <Routes>
      <Route path="/photogallery/" element={<Navbar />}>
        <Route path="/photogallery/" index element={<HomePage />} />
        <Route path="/photogallery/profile" element={<ProfilePage />} />
        <Route path="/photogallery/user/:userId" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;
