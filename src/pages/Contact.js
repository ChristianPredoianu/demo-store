import Form from '../components/forms/Form';
import classes from './Contact.module.scss';

const Contact = () => {
  return (
    <>
      <section>
        <div className={classes['img-wrapper']}></div>
      </section>
      <div className="container">
        <section className={classes['form-section']}>
          <Form />
        </section>
      </div>
    </>
  );
};

export default Contact;
