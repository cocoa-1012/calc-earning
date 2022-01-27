import { motion } from 'framer-motion';
import React from 'react';
import icon from '../../images/icons/icon-2.png';
import { defaultAnimationsResult } from '../../utils/defaultAnimations';
import { durationForResult } from '../../utils/duration';
const Footer = ({ count }) => {
  return (
    <motion.div
      {...defaultAnimationsResult}
      transition={{ duration: 1, delay: durationForResult()[count + 1] }}
      className=' flex justify-center items-center gap-2 text-white'
    >
      <p className='sm:text-3xl'>Start earning with </p>
      <div>
        <img src={icon} alt='' />
      </div>
      <p className='sm:text-4xl'>Shoutsy</p>
    </motion.div>
  );
};

export default Footer;
