import { useState } from 'react';

import MessageForm from './MessageForm';
import SignUpFormSuccess from './SignupFormSuccess';
import classes from './Form.module.scss';

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div className={classes.form}>
      {!formIsSubmitted ? (
        <MessageForm submitForm={submitForm} />
      ) : (
        <SignUpFormSuccess />
      )}
    </div>
  );
};

export default Form;
