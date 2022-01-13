const validation = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  if (!values.help) {
    errors.help = 'Message is required';
  } else if (values.help.length < 10) {
    errors.help = 'Message must be longer than 10 characters';
  }

  return errors;
};

export default validation;
