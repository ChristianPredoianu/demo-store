import FooterList from './FooterList';
import CtaBtn from '../../UI/CtaBtn';

import footerData from '../../../footerData.json';

import classes from './Footer.module.scss';

const Footer = () => {
  console.log(footerData);

  const footerListItem = footerData.map((listItem) => {
    return (
      <FooterList
        key={listItem.id}
        heading={listItem.heading}
        item1={listItem.listItem1}
        item2={listItem.listItem2}
        item3={listItem.listItem3}
        item4={listItem.listItem4}
      />
    );
  });

  return (
    <footer className={classes.footer}>
      <div className={classes.dsa}> {footerListItem}</div>

      <div className={classes.cta}>
        <CtaBtn>Subscribe</CtaBtn>
      </div>
    </footer>
  );
};

export default Footer;
