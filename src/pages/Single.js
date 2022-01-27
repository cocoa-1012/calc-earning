import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaInstagram, FaRegCheckCircle, FaTiktok } from 'react-icons/fa';
import Modal from 'react-modal';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Profile/Footer';
import Header from '../components/Profile/Header';
import SingleCard from '../components/Single/SignleCard';
import Loader from '../components/spinner/Loader';
import overlay from '../images/bg-overlay-2.png';
import bg from '../images/result-bg.png';
import shape1 from '../images/shapes/result/01.png';
import shape2 from '../images/shapes/result/02.png';
import shape3 from '../images/shapes/result/03.png';
import shape4 from '../images/shapes/result/04.png';
import shape5 from '../images/shapes/result/05.png';
import shape6 from '../images/shapes/result/06.png';
import routes from '../routes';
import { abbreviateNumber } from '../utils/number';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100vh',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 300000,
  },
};
const allowedName = ['instagram', 'tiktok', 'youtube'];
const footerAnimationDelay = {
  instagram: 29,
  tiktok: 23,
  youtube: 27,
};

const elementOffSetCount = {
  instagram: 9,
  tiktok: 3,
  youtube: 2,
};

const icons = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  youtube: AiOutlineYoutube,
};
const iconColors = {
  instagram: '#DF4482',
  tiktok: '#000',
  youtube: '#DF4482',
};

const Single = () => {
  const { name, keyword } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    abbreviateNumber(910000000000);
    axios.get(`https://shoutsyapi.com/?${name}=${keyword}`).then((res) => {
      setLoading(false);
      const found = res.data.social_medias[name];
      console.log(found);
      if (found.status !== 'success') {
        navigate(routes.home + "?error='Not found'");
        return;
      }
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 1000);
      setData(found);
      return;
    });
  }, [name, keyword, navigate]);
  const profilePicture = useCallback(() => {
    let value = '';
    if (data?.profile_pic_url) {
      value = data?.profile_pic_url;
    }
    if (data?.avatar_url) {
      value = data?.avatar_url;
    }

    return value;
  }, [data]);
  const headerName = useCallback(() => {
    let value = '';
    if (data?.full_name) {
      value = data?.full_name;
    }
    if (data?.username) {
      value = data?.username;
    }

    return value;
  }, [data]);
  const headerUsername = useCallback(() => {
    if (data?.username) {
      return data?.username;
    }

    return '';
  }, [data]);
  const biography = useCallback(() => {
    if (data?.biography) {
      return data?.biography;
    }
    if (data?.about) {
      return data?.about;
    }

    return '';
  }, [data]);

  if (!allowedName.includes(name.toLocaleLowerCase())) {
    return <Navigate to={routes.home + "?error='Invalid name'"} />;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${overlay}) ,url(${bg})`,
      }}
      className='bg-cover bg-no-repeat bg-top min-h-screen pt-24 px-2 xs:px-0 relative'
    >
      <div className='container mx-auto'>
        <div className='lg:absolute lg:top-[50%] lg:left-[50%] w-full px-0 md:px-5 xs:px-10 xl:w-9/12 2xl:w-9/12 3xl:w-7/12 resultPageWrapper'>
          <div className=''>
            {Object.keys(data).length > 0 && !loading && !isSuccess && (
              <>
                <Header
                  profilePicture={profilePicture()}
                  username={headerUsername()}
                  name={headerName()}
                  category={data?.category ? data.category : {}}
                  biography={biography()}
                  countAnimationDelay={() => {}}
                  Icon={icons[name]}
                  iconColor={iconColors[name] || '#000'}
                />
                <SingleCard
                  followers={data?.followers}
                  engagementRate={data?.engagement_rate?.toFixed(2)}
                  from={data?.earnings_low}
                  to={data?.earnings_high}
                  start={elementOffSetCount[name]}
                />
              </>
            )}

            <Footer count={footerAnimationDelay[name]} isSingle />
          </div>
        </div>
      </div>
      <motion.div
        className='overlays'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='absolute left-0 bottom-0 w-12 xs:w-16 lg:w-20 xl:w-auto '>
          <img src={shape1} alt='' />
        </div>
        <div className='absolute top-0 right-0 w-24 xs:w-28 sm:w-36 md:w-40 mlb:w-44 lg:w-48 xl:w-auto  '>
          <img src={shape2} alt='' />
        </div>
        <div className='absolute top-0 left-0  w-20  sm:w-24 md:w-32 mlb:w-36 lg:w-40 xl:w-auto'>
          <img src={shape3} alt='' />
        </div>
        <div
          className='absolute right-0 
            top-10 xs:top-14 md:top-20 xl:top-28
            w-10  sm:w-14 md:w-16 mlb:w-20 lg:w-24 xl:w-auto'
        >
          <img src={shape4} alt='' />
        </div>
        <div className='absolute bottom-0 right-0 w-16  sm:w-20 md:w-28 mlb:w-32 lg:w-36 xl:w-auto '>
          <img src={shape5} alt='' />
        </div>
        <div className='absolute top-11 md:top-24 md:hidden mlb:block left-0 w-12  sm:w-20 md:w-28 mlb:w-32 lg:w-36 xl:w-auto '>
          <img src={shape6} alt='' />
        </div>
      </motion.div>
      <Modal
        isOpen={!!(loading || isSuccess)}
        style={customStyles}
        contentLabel='Example Modal'
        zIndex={300}
      >
        {loading && (
          <div>
            <Loader />
            <p className='mt-10 text-2xl text-white font-semibold uppercase'>
              Processing
            </p>
          </div>
        )}
        {isSuccess && (
          <div className='flex justify-center items-center'>
            <div className='flex justify-center flex-col items-center'>
              <div className='text-green-400 w-32 text-9xl'>
                <FaRegCheckCircle />
              </div>
              <p className='mt-10 text-2xl text-white font-dm-sans font-bold  uppercase'>
                Processing
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Single;
