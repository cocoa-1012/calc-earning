export const addFormValidation = (data) => {
  const e = {};
  let emailValidate = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

  const { email } = data;

  if (!email) {
    e.email = 'Email is required!';
  } else if (!emailValidate.test(email)) {
    e.email = 'Email must be valid';
  }

  return {
    hasError: Object.keys(e).length > 0,
    errors: e,
  };
};
