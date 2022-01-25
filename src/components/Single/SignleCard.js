import React from 'react';

const SingleCard = () => {
  return (
    <div className='w-full sm:w-[24rem] md:w-[26rem] lg:w-[35rem] py-8  sm:mx-auto text-center box-border rounded-3xl mb-4 mt-5'>
      <p className='text-5xl md:text-7xl lg:text-8xl text-center text-white font-bold'>
        $120 - $300
      </p>
      <p className='text-center text-white md:text-xl lg:text-2xl text-lg mt-1 mb-2'>
        Estimated payout per post
      </p>
      <div className='flex justify-between text-center'>
        <div>
          <p className='text-4xl lg:text-5xl font-semibold text-white'>275K</p>
          <p className='text-white text-xs lg:text-xl'>Followers</p>
        </div>
        <div>
          <p className='text-4xl lg:text-5xl font-semibold text-white'>3.49%</p>
          <p className='text-white text-xs lg:text-xl'>Engagement Rate</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
