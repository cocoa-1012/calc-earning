import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import shortid from 'shortid';
import Item from './Item';
const items = [
  {
    id: shortid(),
    username: '@Kevvy124',
    icon: FaInstagram,
    iconColor: '#DF4482',
    price: {
      from: '$120',
      to: '300',
    },
    follower: '275k',
    engageRate: '3.49%',
  },
  {
    id: shortid(),
    username: '@Kevvy124',
    icon: FaTiktok,
    iconColor: '#000',
    price: {
      from: '$1450',
      to: '3400',
    },
    follower: '25k',
    engageRate: '1.49%',
  },
  {
    id: shortid(),
    username: '@Kevvy124',
    icon: AiOutlineYoutube,
    iconColor: '#DF4482',
    price: {
      from: '$120',
      to: '300',
    },
    follower: '35k',
    engageRate: '10%',
  },
];

const ResultItems = () => {
  return (
    <div className='w-full'>
      <div className='md:flex gap-14 my-24 flex-wrap lg:flex-nowrap'>
        {items.map((item) => (
          <Item
            key={item.id}
            username={item.username}
            Icon={item.icon}
            iconColor={item.iconColor}
            price={item.price}
            from={item.price.from}
            to={item.price.to}
            follower={item.follower}
            engageRate={item.engageRate}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultItems;
