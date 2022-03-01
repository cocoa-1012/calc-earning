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
  const [youtubeUsername, setYoutubeUsername] = useState('');
  const [instagramUsername, setinItagramUsername] = useState('');
  const [tiktokUsername, setTiktokUsername] = useState('');

  const propsObjects = { youtubeUsername, instagramUsername, tiktokUsername };

  const setFetchedData = (data, values) => {
    setData(data);
    const { tiktokUsername, instagramUsername, youtubeUsername } = values;
    setYoutubeUsername(youtubeUsername);
    setinItagramUsername(instagramUsername);
    setTiktokUsername(tiktokUsername);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path={routes.home} element={<Home />} />
        <Route
          path={routes.add}
          element={<AddItem setFetchedData={setFetchedData} />}
        />
        <Route
          path={routes.result}
          element={<Result data={data} {...propsObjects} />}
        />
        <Route path={routes.single} element={<Single />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
