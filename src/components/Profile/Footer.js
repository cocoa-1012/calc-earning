import { motion } from 'framer-motion';
import React from 'react';
import icon from '../../images/icons/icon-2.png';
import { defaultAnimationsResult } from '../../utils/defaultAnimations';
import { durationForResult } from '../../utils/duration';
import ClaimedProfileForm from '../form/ClaimedProfileForm';
const Footer = ({ count, isSingle = false }) => {
  return (
    <div>
      {isSingle && (
        <motion.h3
          {...defaultAnimationsResult}
          transition={{ duration: 1, delay: durationForResult()[count + 1] }}
          className='sm:text-4xl font-dm-sans  font-bold text-white text-center mb-6 mt-4'
        >
          Claim your profile
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
        <a
          href='https://www.shoutsy.app'
          rel='noreferrer'
          target='_blank'
          className='block'
        >
          <img src={icon} alt='' />
        </a>
        <a
          href='https://www.shoutsy.app'
          rel='noreferrer'
          target='_blank'
          className='sm:text-4xl font-popins block font-bold'
        >
          Shoutsy
        </a>
      </motion.div>
      <div className='mt-10'>
        <ClaimedProfileForm delay={durationForResult()[count + 10]} />
      </div>
    </div>
  );
};

export default Footer;
