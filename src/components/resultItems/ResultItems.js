import React, { useEffect, useState } from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import shortid from 'shortid';
import Item from './Item';



const ResultItems = (props) => {
  const { instagram, tiktok, youtube, count, setCount } = props;
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
    icon: AiOutlineYoutube,
    iconColor: '#DF4482',
    price: {
      from: youtube?.earnings_low || 0,
      to: youtube?.earnings_high || 0,
    },
    follower: youtube?.followers || 0,
    engageRate: youtube?.engagement_rate || 0,
  };
  const [initCount, setIntiCount] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIntiCount(count), []);

  useEffect(() => {
    let countForThisComponent = 0;
    if (tiktok.statue === 'success') countForThisComponent += 1;
    if (youtube.statue === 'success') countForThisComponent += 1;
    if (instagram.statue === 'success') countForThisComponent += 1;
    setCount((prev) => prev + countForThisComponent);
  }, [instagram, youtube, tiktok, setCount]);

  const allItemClasses = () => {
    let extraClasses = '';
    const array = Object.values({ tiktok, youtube, instagram }).filter(
      (item) => item.status === 'success'
    );
    if (array.length === 1) {
      extraClasses = 'justify-center';
    }
    if (array.length === 2) {
      extraClasses = 'justify-between';
    }

    return `md:flex gap-14 my-24 flex-wrap lg:flex-nowrap ${extraClasses}`;
  };

  return (
    <div className='w-full'>
      <div className={allItemClasses()}>
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
            delayCount={initCount + 1}
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
            delayCount={initCount + 2}
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
            delayCount={initCount + 3}
          />
        )}
      </div>
    </div>
  );
};

export default ResultItems;
