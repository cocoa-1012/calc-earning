import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import shortid from 'shortid';
import Item from './Item';

const ResultItems = ({ instagram, tiktok, youtube }) => {
  const items = [
    {
      id: shortid(),
      username: instagram?.username || 'Unknown',
      icon: FaInstagram,
      iconColor: '#DF4482',
      price: {
        from: instagram?.earnings_low || 0,
        to: instagram?.earnings_high || 0,
      },
      follower: instagram?.followers || 0,
      engageRate: instagram?.engagement_rate || 0,
    },
    {
      id: shortid(),
      username: tiktok?.username || 'Unknown',
      icon: FaTiktok,
      iconColor: '#000',
      price: {
        from: tiktok?.earnings_low || 0,
        to: tiktok?.earnings_high || 0,
      },
      follower: tiktok?.followers || 0,
      engageRate: tiktok?.engagement_rate || 0,
    },
    {
      id: shortid(),
      username: youtube?.username || 'Unknown',
      icon: FaTiktok,
      iconColor: '#DF4482',
      price: {
        from: youtube?.earnings_low || 0,
        to: youtube?.earnings_high || 0,
      },
      follower: youtube?.followers || 0,
      engageRate: youtube?.engagement_rate || 0,
    },
  ];
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
