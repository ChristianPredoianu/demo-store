import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './SignUpFormSuccess.module.scss';

const SignUpFormSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  });

  return (
    <div className="container">
      <h1 className={classes['form-success']}>Message Sent!</h1>
    </div>
  );
};

export default SignUpFormSuccess;
