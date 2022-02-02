import Card from '../UI/Card';
import CtaBtn from '../UI/CtaBtn';

import classes from './SupportCard.module.scss';

const SupportCard = (props) => {
  return (
    <div className={classes['support-card']}>
      <div className={classes['card-icon']}>{props.icon}</div>
      <h2 className={classes['card-heading']}>{props.heading}</h2>
      <p className={classes['card-text']}>{props.text}</p>
      <div className={classes['card-btn']}>
        <CtaBtn>{props.btnText}</CtaBtn>
      </div>
    </div>
  );
};

export default SupportCard;
