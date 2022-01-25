import React from 'react';
import style from './loader.module.css';
const Loader = () => {
  return (
    <div
      style={{
        transform: 'scale(1.5)',
      }}
      className='h-28 flex items-center justify-center'
    >
      <div className={style.spinner}></div>
    </div>
  );
};

export default Loader;
