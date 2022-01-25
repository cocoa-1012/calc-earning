import React from 'react';
import icon from '../../images/icons/icon-2.png';
const Footer = () => {
  return (
    <div className=' flex justify-center items-center gap-2 text-white'>
      <p className='sm:text-3xl'>Start earning with </p>
      <div>
        <img src={icon} alt='' />
      </div>
      <p className='sm:text-4xl'>Shoutsy</p>
    </div>
  );
};

export default Footer;
