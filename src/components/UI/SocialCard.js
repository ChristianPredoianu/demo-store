import classes from './SocialCard.module.scss';

const SocialCard = (props) => {
  return (
    <div className={classes['social-card']}>
      <p className={classes['social-card__heading']}>{props.heading}</p>
      <div className={classes['social-card__icon']}>{props.icon}</div>
    </div>
  );
};

export default SocialCard;
