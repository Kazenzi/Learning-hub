import React from 'react';
import microsoft from '../../assets/microsoft2.png';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer 
      className="footer-bar container-fluid py-2" 
      style={{ backgroundColor: '#f8f9fa', padding: '10px 0' }}
    >
      <div 
        className="row w-100 align-items-center text-center text-md-start" 
        style={{ alignItems: 'center' }}
      >
        <div className="col-md-4 mb-2 mb-md-0">
          <p 
            className="element-mawingu mb-0" 
            style={{ margin: '0', lineHeight: '1.2', fontSize: '14px' }}
          >
            <span>© {currentYear}</span>
            <span> Mawingu Foundation. </span>
            <span>All rights reserved.</span>
          </p>
        </div>
        <div 
          className="col-md-4 mb-2 mb-md-0 d-flex justify-content-center"
        >
          <img 
            src={microsoft} 
            alt="Microsoft Logo" 
            className="img-fluid microsoft-logo" 
            style={{ maxHeight: '40px', objectFit: 'contain' }}
          />
        </div>
        <div 
          className="col-md-4 d-flex justify-content-center justify-content-md-end gap-3"
        >
          <a 
            href="#" 
            className="text-decoration-none text-secondary" 
            style={{ fontSize: '14px', lineHeight: '1.2' }}
          >
            Privacy
          </a>
          <a 
            href="#" 
            className="text-decoration-none text-secondary" 
            style={{ fontSize: '14px', lineHeight: '1.2' }}
          >
            Terms
          </a>
          <a 
            href="#" 
            className="text-decoration-none text-secondary" 
            style={{ fontSize: '14px', lineHeight: '1.2' }}
          >
            Settings
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
