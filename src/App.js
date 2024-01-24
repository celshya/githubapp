// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RepositoryDetailPage from './components/RepositoryDetailPage';
import FollowerDetailPage from './components/FollowersDetailPage';
import FollowersList from './components/FollowersList';


const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repository/:id" element={<RepositoryDetailPage  />} />
        <Route path="/followers/:username" element={<FollowerDetailPage />} />
        <Route path="/followers" element={<FollowersList />} />
      </Routes>
    </Router>
  );
};

export default App;
