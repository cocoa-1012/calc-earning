import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AddItem from './pages/AddItem';
import Home from './pages/Home';
import Result from './pages/Result';
import Single from './pages/Single';
import routes from './routes';

const App = () => {
  const location = useLocation();
  const [data, setData] = useState({});

  const setFetchedData = (data) => {
    setData(data);
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path={routes.home} element={<Home />} />
          <Route
            path={routes.add}
            element={<AddItem setFetchedData={setFetchedData} />}
          />
          <Route path={routes.result} element={<Result data={data} />} />
          <Route path={routes.single} element={<Single />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
