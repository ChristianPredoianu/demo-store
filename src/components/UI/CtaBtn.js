import './Cta-btn.scss';

const CtaBtn = (props) => {
  return (
    <button className="cta-btn" onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default CtaBtn;
