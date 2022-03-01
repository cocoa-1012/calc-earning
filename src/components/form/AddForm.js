import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchSocialData } from '../../store/mainActions';
import { addFormValidation } from '../../utils/formValidation';
import Loader from '../spinner/Loader';

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

const AddForm = () => {
  const [instagram, setInstagram] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [youtube, setYoutube] = useState('');
  const [errors, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (showError) {
      const data = { instagram, tiktok, youtube };

      const { hasError, errors: e } = addFormValidation(data);
      if (hasError) {
        setError(e);
      } else {
        setError({});
      }
    }
  }, [instagram, tiktok, youtube, showError]);

  const submitHandler = (event) => {
    event.preventDefault();
    const data = { instagram, tiktok, youtube };
    const { hasError } = addFormValidation(data);
    setShowError(hasError);
    if (!hasError) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-305656401/yheZCITvuJkDENHk35EB',
      });
      //   dispatch action
      dispatch(
        fetchSocialData(
          { tiktok, youtube, instagram },
          {
            setIsSuccess,
            setLoading,
            navigate,
          },
          (result) => {
            if (result) {
              setInstagram('');
              setTiktok('');
              setYoutube('');
            }
          }
        )
      );
    } else {
      toast.error('Please Fill all required field', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <div className='mt-4 sm:mt-20'>
          <form onSubmit={submitHandler}>
            <div className='form-group'>
              <div className=' inputWrapper'>
                <input
                  type='text'
                  placeholder='@Instagram'
                  className='input-box'
                  value={instagram}
                  onChange={(e) => {
                    if (!e.target.value) {
                      setShowError(true);
                    }
                    setInstagram(e.target.value);
                  }}
                />
                {errors.instagram && (
                  <p className='text-left mt-3 text-[#FF2020] font-dm-sans font-medium '>
                    {errors.instagram}
                  </p>
                )}
              </div>
              <div className=' inputWrapper'>
                <input
                  type='text'
                  placeholder='@Tiktok'
                  className='input-box'
                  value={tiktok}
                  onChange={(e) => {
                    if (!e.target.value) {
                      setShowError(true);
                    }
                    setTiktok(e.target.value);
                  }}
                />
                {errors.tiktok && (
                  <p className='text-left mt-3 text-[#FF2020] font-dm-sans font-medium '>
                    {errors.tiktok}
                  </p>
                )}
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='inputWrapper'>
                <input
                  type='text'
                  placeholder='@Youtube ID'
                  className='input-box'
                  value={youtube}
                  onChange={(e) => setYoutube(e.target.value)}
                />
                {errors.youtube && (
                  <p className='text-left mt-3 text-[#FF2020] font-dm-sans font-medium '>
                    {errors.youtube}
                  </p>
                )}
              </div>
            </div>
            <div>
              <button className='btn-outline-white2 text-2xl' type='submit'>
                Submit
              </button>
            </div>
          </form>

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
      </AnimatePresence>
    </>
  );
};

export default AddForm;
