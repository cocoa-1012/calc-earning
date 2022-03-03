import axios from 'axios';
import { toast } from 'react-toastify';
import routes from '../routes';
import { removeAtRate } from '../utils/string';
import * as types from './types';

export const setInputFormData = (data, dispatch) => {
  dispatch({
    type: types.SET_INPUT_FORM_DATA,
    payload: data,
  });
};

export const fetchSocialData = (data, props, cb) => (dispatch) => {
  const { setIsSuccess, setLoading, navigate } = props;
  const { tiktok, youtube, instagram } = data;
  setInputFormData(data, dispatch);
  setLoading(true);
  const arrayOfItems = Object.entries({
    tiktok,
    instagram,
    youtube,
  }).filter(([key, value]) => !!value);

  if (arrayOfItems.length === 1) {
    setLoading(false);
    setIsSuccess(false);
    const firstItem = arrayOfItems.filter(([key]) => {
      return key !== 'name' && key !== 'email';
    })[0];
    if (firstItem[0] === 'youtube') {
      const splitValue = firstItem[1].split('/');
      const valueToPass = splitValue[splitValue.length - 1];
      navigate(`/${firstItem[0]}/${removeAtRate(valueToPass)}?form=true`);
      cb(true);
      return;
    }
    navigate(`/${firstItem[0]}/${removeAtRate(firstItem[1])}?form=true`);
    cb(true);
    return;
  }
  const queryString = () => {
    return arrayOfItems
      .map(([name, value]) => {
        const filterValue = removeAtRate(value);
        return `${name}=${filterValue}`;
      })
      .join('&');
  };

  axios.get(`https://shoutsyapi.com/?${queryString()}`).then(async (res) => {
    setLoading(false);

    const array = Object.values({ ...res.data.social_medias }).filter(
      (item) => item.status === 'success'
    );
    if (array.length === 0) {
      toast.error('No data found!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
      cb(false);
      return;
    }

    dispatch({
      type: types.FETCH_SOCIAL_MEDIA_DATA,
      payload: res?.data?.social_medias,
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setTimeout(() => {
        navigate(routes.result);
        cb(true);
      }, 1000);
    }, 1000);
  });
};

export const fetchSingleSocialData = (values, props, cb) => (dispatch) => {
  const { name, keyword } = values;
  setInputFormData({ [name]: keyword }, dispatch);
  const { setLoading, navigate, setIsSuccess, pathname } = props;
  axios.get(`https://shoutsyapi.com/?${name}=${keyword}`).then(async (res) => {
    setLoading(false);

    const found = res.data.social_medias[name];

    if (found.status !== 'success') {
      if (pathname !== routes.add) {
        return navigate(routes.home + `?error=No data found`);
      }
    }

    dispatch({
      type: types.FETCH_SOCIAL_MEDIA_DATA,
      payload: res?.data?.social_medias,
    });

    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 1000);

    return;
  });
};

export const sendClaimRequest = async (formInputs, data, props) => {
  try {
    const instaData = data?.instagram ? data?.instagram : {};
    const tiktokData = data?.tiktok ? data?.tiktok : {};
    const youtubeData = data?.youtube ? data?.youtube : {};

    const { tiktok, youtube, instagram, name, email } = formInputs;
    const {
      setError,
      setLoading,
      setIsSuccess,
      setEmail,
      setName,
      CustomToastWithLink,
      setIsSubmitted,
    } = props;
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
      window.gtag('event', 'conversion', {
        send_to: 'AW-305656401/yheZCITvuJkDENHk35EB',
      });
      setLoading(true);
      const requestDta = {
        _name: name,
        email,
        action: 'submit_nex_form',
        company_url: '',
        instagram,
        instagram_engagement: instagram?.engagement_rate
          ? instaData.engagement_rate
          : 0,
        instagram_followers: instagram?.followers ? instaData.followers : 0,
        ip: '',
        ms_current_step: '1',
        nex_forms_Id: '15',
        nf_page_id: '25',
        nf_page_title: 'Shoutsy Signup',
        page: '/signup/calc-signup/',
        paypal_return_url: 'https://shoutsy.app/signup/calc-signup',
        tiktok,
        tiktok_engagement: tiktokData?.engagement_rate
          ? tiktokData.engagement_rate
          : 0,
        tiktok_followers: tiktokData?.followers ? tiktokData.followers : 0,
        youtube,
        youtube_engagement: youtubeData?.engagement_rate
          ? youtubeData.engagement_rate
          : 0,
        youtube_subscribers: youtubeData?.followers ? youtubeData.followers : 0,
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
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSuccess(false);
        toast.success(CustomToastWithLink, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
        });
        setEmail('');
        setName('');
      }, 1500);
    }
  } catch (error) {
    console.log(error);
    toast.error('Failed to send request! try again', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
    });
  }
};
