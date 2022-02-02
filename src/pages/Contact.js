import Form from '../components/forms/Form';
import SupportCard from '../components/UI/SupportCard';
import SocialCard from '../components/UI/SocialCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadset,
  faDesktop,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import classes from './Contact.module.scss';

const Contact = () => {
  const headsetIcon = <FontAwesomeIcon icon={faHeadset} />,
    desktopIcon = <FontAwesomeIcon icon={faDesktop} />,
    questionIcon = <FontAwesomeIcon icon={faQuestion} />,
    twitterIcon = <FontAwesomeIcon icon={faTwitter} />,
    facebookIcon = <FontAwesomeIcon icon={faFacebook} />,
    youtubeIcon = <FontAwesomeIcon icon={faYoutube} />,
    linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;

  return (
    <>
      <section>
        <div className={classes['img-wrapper']}></div>
      </section>
      <div className="container">
        <section className={classes['contact-cards-section']}>
          <SupportCard
            icon={headsetIcon}
            heading={'Customer Support'}
            text={
              'Having problems using our service? Our customer support team is eager to help you with any service related questions.'
            }
            btnText={'All Questions'}
          />
          <SupportCard
            icon={desktopIcon}
            heading={'Request a Demo'}
            text={'Request a demo and we will be in touch shortly.'}
            btnText={'Request a demo'}
          />
          <SupportCard
            icon={questionIcon}
            heading={'Sales Inquiry'}
            text={
              'Contact our sales experts to get answers to all your questions about purchases.'
            }
            btnText={'Contact Sales Team'}
          />
        </section>
        <section className={classes['form-section']}>
          <Form />
        </section>
        <div className={classes['heading-wrapper']}>
          <h1 className={classes['social-heading']}>
            Or connect with us on....
          </h1>
        </div>
        <section className={classes['social-section']}>
          <SocialCard heading={'Twitter'} icon={twitterIcon} />
          <SocialCard heading={'Linkedin'} icon={linkedinIcon} />
          <SocialCard heading={'Facebook'} icon={facebookIcon} />
          <SocialCard heading={'Youtube'} icon={youtubeIcon} />
        </section>
      </div>
    </>
  );
};

export default Contact;
