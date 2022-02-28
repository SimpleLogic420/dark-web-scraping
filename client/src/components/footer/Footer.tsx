import React from 'react';
import Credit from './Credit';

function Footer() {
  return <div className='footer'>
       <div className="footer-container">
        <p className="copyright">
          <span>© Copyright 2022</span>
          <Credit ghLink="https://github.com/SimpleLogic420" ghName="Nadav Vol" />
        </p>
  </div>;
  </div>
}

export default Footer;
