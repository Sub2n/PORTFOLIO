import React from 'react';
import Smile from '../imgs/smile.png';
import { FaExternalLinkAlt, FaPhone, FaSms } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const MainContact = () => {
  return (
    <section id="contact" className="wrap light-background">
      <h4 className="center letter-spaced margin100">CONTACT</h4>
      <div className="light-background margin100">
        <div className="row">
          <div className="small-12 columns center">
            <img src={Smile} alt="Smile" width="330px" />
            <h3 className="margin20 relative">
              <a
                className="contact"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Sub2n">
                https://github.com/Sub2n
                <FaExternalLinkAlt id="contactLink" />
              </a>
            </h3>
            <h4 className="relative margin15">
              <a href="mailto:95su1208@gmail.com">
                95su1208@gmail.com
                <FiSend id="mailLink" />
              </a>
            </h4>
            <h4 className="relative">
              +82 10 8422 0991{' '}
              <a className="contact phone" href="tel:+82-10-8422-0991">
                <FaPhone />
              </a>
              <a className="contact sms" href="sms:+82-10-8422-0991">
                <FaSms />
              </a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContact;
