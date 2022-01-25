import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './App.css';
import AddItem from './pages/AddItem';
import Home from './pages/Home';
import Result from './pages/Result';
import Single from './pages/Single';
import routes from './routes';
const App = () => {
  const [data, setData] = useState({});

  const setFetchedData = (data) => {
    setData(data);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route
        path={routes.add}
        element={<AddItem setFetchedData={setFetchedData} />}
      />
      <Route path={routes.result} element={<Result data={data} />} />
      <Route path={routes.single} element={<Single />} />
    </Routes>
  );
};

export default App;
