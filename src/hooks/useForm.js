import { useState, useEffect } from 'react';
import validation from '../components/forms/validation';

const useForm = (submitForm) => {
  const [inputValues, setInputValues] = useState({
    email: '',
    help: '',
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setErrors(validation(inputValues));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors, dataIsCorrect, submitForm]);

  return { handleChange, formSubmitHandler, errors, inputValues };
};

export default useForm;
