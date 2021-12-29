import classes from './CtaBtn.module.scss';

const CtaBtn = (props) => {
  return (
    <button className={classes['cta-btn']} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default CtaBtn;
