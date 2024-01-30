import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import {
  HomePage,
  CreatePage,
  ProfilePage,
  SearchPage,
} from "./components/pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/home" index element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
};

export default App;
