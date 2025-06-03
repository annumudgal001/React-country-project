import React from 'react';
import { Link } from 'react-router-dom';
import FooterAPI from '../../API/FooterAPI.json';
import { MdPlace } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { TbMailPlus } from 'react-icons/tb';

export const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="grid grid-three-cols">
          {FooterAPI.map((curData, index) => {
            const { icon, title, details } = curData;
            return (
              <div key={index} className="footer-contact">
                <div className="icon">{footerIcon[icon]}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
        <div className="footer-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/country">Country</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
          <div className="copyright-text">
            <p>
              © {new Date().getFullYear()} WorldAtlas. Developed by{' '}
              <a href="mailto:akshitmudgal001@gmail.com">Akshit Mudgal</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};