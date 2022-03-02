import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { sendClaimRequest } from '../../store/mainActions';
import { defaultAnimationsResult } from '../../utils/defaultAnimations';
import Loader from '../spinner/Loader';

const ClaimedProfileForm = ({ delay }) => {
  const searchValues = useSelector((state) => state.form);
  const { data } = useSelector((state) => state);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  const [errors, setError] = useState({});
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formInputs = { name, email, ...searchValues };
    const properties = {
      setError,
      setLoading,
      setIsSuccess,
      setEmail,
      setName,
      setIsSubmitted,
      CustomToastWithLink,
    };
    dispatch(sendClaimRequest(formInputs, data, properties));
  };
  return (
    <>
      <motion.div
        {...defaultAnimationsResult}
        className='flex justify-center items-center'
        transition={{ duration: 1, delay }}
      >
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center'>
          <div className='form-group'>
            <div className='inputWrapper relative overflow-hidden'>
              <input
                type='text'
                placeholder='Name'
                className='input-box'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className='text-left mt-3 text-[#FF2020] font-dm-sans font-medium '>
                  {errors.name}
                </p>
              )}
            </div>
            <div className='inputWrapper'>
              <input
                type='email'
                placeholder='Email'
                className='input-box'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className='text-left mt-3 text-[#FF2020] font-dm-sans font-medium '>
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className='mb-5'>
            <button
              className='btn-outline-claim text-lg disabled:bg-[#E7F0FF] disabled:border-[#E7F0FF] disabled:text-gray-600 disabled:cursor-not-allowed'
              disabled={isSubmitted}
              type='submit'
            >
              {isSubmitted ? 'Submitted' : 'Claim Profile'}
            </button>
          </div>
        </form>
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
    </>
  );
};
const CustomToastWithLink = () => (
  <div>
    <a href='https://www.shoutsy.app' rel='noreferrer' target='_blank'>
      Learn more
    </a>
  </div>
);
export default ClaimedProfileForm;

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
