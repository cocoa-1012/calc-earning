import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import { defaultAnimationsResult } from '../../utils/defaultAnimations';
import { durationForResult } from '../../utils/duration';
import { sliceString } from '../../utils/string';
import './header.css';

const Header = ({
  profilePicture,
  username,
  name,
  category,
  biography,
  countAnimationDelay,
  Icon,
  iconColor,
}) => {
  const [hobbyItems, setHobbyItems] = useState([]);

  useEffect(() => {
    setHobbyItems(
      Object.values(category).map((value) => {
        return { id: shortid(), name: value };
      })
    );
  }, [category]);

  useEffect(() => {
    countAnimationDelay(hobbyItems.length + 4);
  }, [hobbyItems, countAnimationDelay]);

  return (
    <div className='lg:px-20 md:w-10/12 mlb:mx-auto '>
      <div className='md:flex gap-5 items-center'>
        <div className='text-center'>
          {profilePicture && (
            <motion.div
              {...defaultAnimationsResult}
              transition={{ duration: 1, delay: durationForResult()[0] }}
              className='w-52 h-52 from-[#A95865] via-[#EB4E67] to-[#F25DFF] rounded-full flex items-center justify-center profileImageBg'
            >
              <div className='mx-auto w-48 h-48 rounded-full overflow-hidden border-1'>
                <img
                  src={profilePicture}
                  alt=''
                  className='w-full h-full object-cover'
                />
              </div>
            </motion.div>
          )}
          <motion.p
            {...defaultAnimationsResult}
            transition={{ duration: 1, delay: durationForResult()[1] }}
            className='text-white text-lg text-center  font-dm-sans font-bold'
          >
            {Icon ? (
              <div className='flex gap-1 items-center'>
                <Icon
                  style={{
                    color: iconColor ? iconColor : '',
                    fontSize: '30px',
                  }}
                />
                <p>@{username}</p>
              </div>
            ) : (
              <span>@{username}</span>
            )}
          </motion.p>
        </div>
        <div>
          <motion.h1
            {...defaultAnimationsResult}
            transition={{ duration: 1, delay: durationForResult()[2] }}
            className='text-5xl text-white mb-3  font-dm-sans font-bold'
          >
            {name}
          </motion.h1>

          <motion.p
            {...defaultAnimationsResult}
            transition={{ duration: 1, delay: durationForResult()[3] }}
            className={`text-white text-xl lg:text-2xl  font-dm-sans font-bold`}
          >
            {sliceString(biography) || 'No Biography'}
          </motion.p>

          <motion.ul
            {...defaultAnimationsResult}
            transition={{ duration: 1, delay: durationForResult()[4] }}
            className='flex gap-2 flex-wrap mt-4'
          >
            {hobbyItems.map((item, i) => (
              <motion.li
                key={item.id}
                {...defaultAnimationsResult}
                transition={{ duration: 1, delay: durationForResult()[4 + i] }}
                className='bg-[#3D53F5] text-sm sm:text-base text-white px-5 py-2 rounded-full font-inter font-normal'
              >
                {item.name}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
