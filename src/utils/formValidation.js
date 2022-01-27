export const addFormValidation = (data) => {
  const e = {};
  let emailValidate = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

  const { email, instagram, tiktok, youtube, name } = data;

  if (!email) {
    e.email = 'Email is required!';
  } else if (!emailValidate.test(email)) {
    e.email = 'Email must be valid';
  }
  if (!name) {
    e.name = 'Name is required!';
  }

  if (!instagram && !tiktok && !youtube) {
    e.instagram = 'Please enter at least one social media';
    e.tiktok = 'Please enter at least one social media';
    e.youtube = 'Please enter at least one social media';
  }

  return {
    hasError: Object.keys(e).length > 0,
    errors: e,
  };
};
