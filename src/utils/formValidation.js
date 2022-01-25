export const addFormValidation = (data) => {
  const e = {};
  let emailValidate = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

  const { name, email, instagram, tiktok, youtube } = data;

  if (!name) {
    e.name = 'Name is required!';
  }
  if (!email) {
    e.email = 'Email is required!';
  } else if (!emailValidate.test(email)) {
    e.email = 'Email must be valid';
  }
  if (!instagram) {
    e.instagram = 'Instagram id is required!';
  }
  if (!tiktok) {
    e.tiktok = 'Tiktok id is required!';
  }
  if (!youtube) {
    e.youtube = 'Youtube id is required!';
  }

  return {
    hasError: Object.keys(e).length > 0,
    errors: e,
  };
};
