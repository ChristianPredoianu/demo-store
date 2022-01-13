import useForm from '../../hooks/useForm';
import classes from './MessageForm.module.scss';

const MessageForm = (props) => {
  const { handleChange, formSubmitHandler, inputValues, errors } = useForm(
    props.submitForm
  );

  return (
    <>
      <div>
        <h2 className={classes.title}>Send Us A Message</h2>
      </div>
      <form className={classes['form-wrapper']}>
        <div className={classes['input-wrapper']}>
          <label htmlFor="email" className={classes.label}>
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email Adress"
            className={classes.input}
            name="email"
            value={inputValues.email}
            onChange={handleChange}
          ></input>
          {errors.email && <p className={classes.error}>{errors.email}</p>}
        </div>
        <div className={classes['input-wrapper']}>
          <label htmlFor="help" className={classes.label}>
            Help
          </label>
          <textarea
            type="text"
            placeholder="How Can We Help"
            className={classes.help}
            name="help"
            value={inputValues.message}
            onChange={handleChange}
          ></textarea>
          {errors.help && <p className={classes.error}>{errors.help}</p>}
        </div>
        <div>
          <button className={classes.submit} onClick={formSubmitHandler}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default MessageForm;
