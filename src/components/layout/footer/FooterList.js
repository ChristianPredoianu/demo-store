import classes from './FooterList.module.scss';

const FooterList = (props) => {
  return (
    <div>
      <h5 className={classes.heading}>{props.heading}</h5>
      <ul className={classes.list}>
        <li className={classes['list__item']}>{props.item1}</li>
        <li className={classes['list__item']}>{props.item2}</li>
        <li className={classes['list__item']}>{props.item3}</li>
        <li className={classes['list__item']}>{props.item4}</li>
      </ul>
    </div>
  );
};

export default FooterList;
