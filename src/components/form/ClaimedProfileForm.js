import axios from 'axios';
import React, { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import Loader from '../spinner/Loader';

const ClaimedProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [errors, setError] = useState({});
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let emailValidate = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    const errorData = {};
    if (!email) {
      errorData.email = 'Email is required!';
    }
    if (!emailValidate.test(email)) {
      errorData.email = 'Email must be valid';
    }
    if (!name) {
      errorData.name = 'Name is required!';
    }
    setError(errorData);

    if (Object.keys(errorData).length === 0) {
      setLoading(true);
      setError({});
      const requestDta = {
        action: 'submit_nex_form',
        company_url: '',
        ip: '',
        ms_current_step: '1',
        nex_forms_Id: '15',
        nf_page_id: '25',
        nf_page_title: 'Shoutsy Signup',
        page: '/signup/calc-signup/',
        paypal_return_url: 'https://shoutsy.app/signup/calc-signup',
      };

      const formData = new FormData();

      Object.entries(requestDta).forEach(([name, value]) => {
        formData.append(name, value);
      });

      await axios.post(
        'https://shoutsy.app/signup/wp-admin/admin-ajax.php',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      setLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 1500);
      setEmail('');
      setName('');
      setTimeout(() => {
        toast.info(CustomToastWithLink, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
        });
      }, 2000);
    }
  };
  return (
    <>
      <div className='flex justify-center items-center'>
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
            <button className='btn-outline-claim text-lg' type='submit'>
              Claim Profile
            </button>
          </div>
        </form>
      </div>
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
