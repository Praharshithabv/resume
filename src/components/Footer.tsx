/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import { SiCodesandbox } from 'react-icons/si';

const Footer = () => {
  let hours: any;
  let minutes: any;
  let seconds: any;

  const date = new Date();
  const year = date.getFullYear();



  useEffect(() => {
    /*  clock */
    hours = document.querySelector('.hours');
    minutes = document.querySelector('.minutes');
    seconds = document.querySelector('.seconds');

    clock();
  }, []);

  const clock = () => {
    const today = new Date();
    let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
    let m = today.getMinutes(); // 0 - 59
    let s = today.getSeconds(); // 0 - 59

    h *= 30; // 12 * 30 = 360deg
    m *= 6;
    s *= 6; // 60 * 6 = 360deg

    rotation(hours, h);
    rotation(minutes, m);
    rotation(seconds, s);

    // call every second
    setTimeout(clock, 500);
  };

  const rotation = (target: any, val: any) => {
    target.style.transform = `rotate(${val}deg)`;
  };

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='clock' style={{ display: 'none' }}>
          <div className='hand hours'></div>
          <div className='hand minutes'></div>
          <div className='hand seconds'></div>
          <div className='point'></div>
          <div className='marker'>
            <span className='marker__1'></span>
            <span className='marker__2'></span>
            <span className='marker__3'></span>
            <span className='marker__4'></span>
          </div>
        </div>
        <div className='footer-socialmedia--icons'>
          <ul>
            <li>
              <a href='https://github.com/Praharshithabv' target='_blank'>
                <FaGithub size={22} />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/praharshitha-bv/'
                target='_blank'
              >
                <FaLinkedinIn size={22} />
              </a>
            </li>
            {/* <li>
              <a href='https://codepen.io/ajay_krishna' target='_blank'>
                <FaCodepen size={22} />
              </a>
            </li>
            <li>
              <a
                href='https://codesandbox.io/u/ajaykrishna1123'
                target='_blank'
              >
                <SiCodesandbox size={22} />
              </a>
            </li> */}
          </ul>
        </div>
        <p style={{ textAlign: 'center' }}>
          Copyright © {year}. Curated by Praharshitha
        </p>
      </div>
    </footer>
  );
};

export default Footer;
