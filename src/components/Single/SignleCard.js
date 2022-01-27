import { motion } from 'framer-motion';
import React from 'react';
import { defaultAnimationsResult } from '../../utils/defaultAnimations';
import { durationForResult } from '../../utils/duration';
import { abbreviateNumber } from '../../utils/number';

const SingleCard = ({ followers, engagementRate, from, to, start = 9 }) => {
  return (
    <div className='w-full sm:w-[24rem] md:w-[26rem] lg:w-[35rem] py-8  sm:mx-auto text-center box-border rounded-3xl mb-4 mt-5'>
      <motion.p
        {...defaultAnimationsResult}
        transition={{ duration: 1, delay: durationForResult()[start + 2] }}
        className='text-5xl md:text-7xl lg:text-8xl text-center text-white font-bold'
      >
        {'$'}
        {from} - {'$'}
        {to}
      </motion.p>
      <motion.p
        {...defaultAnimationsResult}
        transition={{ duration: 1, delay: durationForResult()[start + 3] }}
        className='text-center text-white md:text-xl lg:text-3xl xl:text-4xl text-lg mt-1 mb-2'
      >
        Estimated payout per post
      </motion.p>
      <motion.div
        {...defaultAnimationsResult}
        transition={{ duration: 1, delay: durationForResult()[start + 4] }}
        className='flex justify-between text-center'
      >
        <div>
          <motion.p
            {...defaultAnimationsResult}
            transition={{ duration: 1, delay: durationForResult()[start + 5] }}
            className='text-4xl lg:text-5xl font-semibold text-white'
          >
            {abbreviateNumber(followers)}
          </motion.p>
          <motion.p
            {...defaultAnimationsResult}
            transition={{ duration: 1, delay: durationForResult()[start + 6] }}
            className='text-white text-xs lg:text-xl'
          >
            Followers
          </motion.p>
        </div>
        <div>
          <motion.p
            {...defaultAnimationsResult}
            transition={{ duration: 1, delay: durationForResult()[start + 7] }}
            className='text-4xl lg:text-5xl font-semibold text-white'
          >
            {engagementRate}%
          </motion.p>
          <motion.p
            {...defaultAnimationsResult}
            transition={{ duration: 1, delay: durationForResult()[start + 8] }}
            className='text-white text-xs lg:text-xl'
          >
            Engagement Rate
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default SingleCard;
