import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './pages/AddItem';
import Home from './pages/Home';
import Result from './pages/Result';
import Single from './pages/Single';
import routes from './routes';
const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.add} element={<AddItem />} />
      <Route path={routes.result} element={<Result />} />
      <Route path={routes.single} element={<Single />} />
    </Routes>
  );
};

export default App;
