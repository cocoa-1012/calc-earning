import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './pages/AddItem';
import Home from './pages/Home';
import routes from './routes';
const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.add} element={<AddItem />} />
    </Routes>
  );
};

export default App;
