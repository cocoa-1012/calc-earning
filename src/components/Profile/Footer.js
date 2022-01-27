import { motion } from 'framer-motion';
import React from 'react';
import icon from '../../images/icons/icon-2.png';
import { defaultAnimationsResult } from '../../utils/defaultAnimations';
import { durationForResult } from '../../utils/duration';
const Footer = ({ count, isSingle = false }) => {
  return (
    <div>
      {isSingle && (
        <motion.h3
          {...defaultAnimationsResult}
          transition={{ duration: 1, delay: durationForResult()[count + 1] }}
          className='sm:text-4xl font-dm-sans  font-bold text-white text-center mb-6 mt-4'
        >
          Claim you profile
        </motion.h3>
      )}

      <motion.div
        {...defaultAnimationsResult}
        transition={{ duration: 1, delay: durationForResult()[count + 1] }}
        className=' flex justify-center items-center gap-2 text-white'
      >
        <p className='sm:text-3xl font-dm-sans font-bold '>
          Start earning with{' '}
        </p>
        <div>
          <img src={icon} alt='' />
        </div>
        <p className='sm:text-4xl font-popins  font-bold'>Shoutsy</p>
      </motion.div>
    </div>
  );
};

export default Footer;
