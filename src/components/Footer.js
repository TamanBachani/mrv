import React from 'react'
import '../stylesheets/footer.css'

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-social-row">
        <div className="footer-col">
          <div className="footer-links-1 footer-links">
            <a href="/" className="foot-link">
              contact
            </a>
            <a href="/" className="foot-link">
              about
            </a>
            <a href="/" className="foot-link">
              support
            </a>
            <a href="/" className="foot-link">
              careers
            </a>
          </div>
          <div className="footer-links-2 footer-links">
            <a href="/" className="foot-link">
              access
            </a>
            <a href="/" className="foot-link">
              subscribe
            </a>
            <a href="/" className="foot-link">
              newsletter
            </a>
            <a href="/" className="foot-link">
              blog
            </a>
          </div>
        </div>
        <div className="socials">
          <div className="social-row">
            <i className="fab fa-youtube social-icon"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          <div className="social-row">
            <i className="fab fa-patreon"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div> */}
      <div className="footer-logo-copy">
        <div className="footer-logo">
          <span className="footer-brand">MRV by Taman Bachani</span>
        </div>
        <span className="copy">&copy; 2022 Medical Report Visualizer | TAMAN BACHANI</span>
      </div>
    </div>
  );
}

export default Footer