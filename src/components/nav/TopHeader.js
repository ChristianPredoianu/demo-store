import classes from './TopHeader.module.scss';

const TopHeader = () => {
  return (
    <div className={classes['top-header']}>
      <div className="container">
        <p>Free Shipping for standard order over 100$</p>
      </div>
    </div>
  );
};

export default TopHeader;
