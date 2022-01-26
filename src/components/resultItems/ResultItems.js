import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import shortid from 'shortid';
import Item from './Item';

const ResultItems = ({ instagram, tiktok, youtube }) => {
  const instagramData = {
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
  };
  const tiktokData = {
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
  };
  const youtubeData = {
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
  };
  return (
    <div className='w-full'>
      <div className='md:flex gap-14 my-24 flex-wrap lg:flex-nowrap'>
        {instagram.status === 'success' && (
          <Item
            key={instagramData.id}
            username={instagramData.username}
            Icon={instagramData.icon}
            iconColor={instagramData.iconColor}
            price={instagramData.price}
            from={instagramData.price.from}
            to={instagramData.price.to}
            follower={instagramData.follower}
            engageRate={instagramData.engageRate}
          />
        )}
        {tiktok.status === 'success' && (
          <Item
            key={tiktokData.id}
            username={tiktokData.username}
            Icon={tiktokData.icon}
            iconColor={tiktokData.iconColor}
            price={tiktokData.price}
            from={tiktokData.price.from}
            to={tiktokData.price.to}
            follower={tiktokData.follower}
            engageRate={tiktokData.engageRate}
          />
        )}
        {youtube.status === 'success' && (
          <Item
            key={youtubeData.id}
            username={youtubeData.username}
            Icon={youtubeData.icon}
            iconColor={youtubeData.iconColor}
            price={youtubeData.price}
            from={youtubeData.price.from}
            to={youtubeData.price.to}
            follower={youtubeData.follower}
            engageRate={youtubeData.engageRate}
          />
        )}
      </div>
    </div>
  );
};

export default ResultItems;
