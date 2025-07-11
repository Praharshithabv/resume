import { useState, useEffect } from 'react';

const Header = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    setIsContentLoaded(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className='header fadeInDown'>
      <div className='header-container'>
        <div className='header-container--left'>
          <a onClick={scrollToTop}>
            <img tabIndex={0} src='./PH.png' alt='PH Logo' />
            <img tabIndex={0} src='./Coding_guy.gif' alt='PH Logo' />
          </a>
        </div>
        <div className='header-container--right'>
          <nav className='header-navigation'>
            <ul>
              <li tabIndex={0}>
                <a href='#aboutme'>About</a>
              </li>
              <li tabIndex={0}>
                <a href='#mywork'>Work</a>
              </li>
              {/* <li tabIndex={0}>
                <a href='#aboutme'>Let's Play</a>
              </li> */}
              <li tabIndex={0} style={{ marginRight: 0 }}>
                <a href='#projects'>Projects</a>
              </li>
            </ul>
          </nav>
          {/* <div className='header-resume-container'>
            <a
              target='_blank'
              href='./Resume.pdf'
              className='header-resume--btn'
            >
              RESUME
            </a>
          </div> */}
          <div className='header-mobile-navigation'>
            <div
              className={`menu-btn ${isHamburgerActive ? 'active' : ''}`}
              onClick={() => setIsHamburgerActive(!isHamburgerActive)}
            >
              <span></span>
            </div>

            {isContentLoaded && (
              <nav
                className={`header-mb-navigation ${
                  isHamburgerActive ? 'fadeInDown' : 'fadeOutUp'
                }`}
              >
                <ul>
                  <li
                    tabIndex={0}
                    onClick={() => setIsHamburgerActive(!isHamburgerActive)}
                  >
                    <a href='#aboutme'>About</a>
                  </li>
                  <li
                    tabIndex={0}
                    onClick={() => setIsHamburgerActive(!isHamburgerActive)}
                  >
                    <a href='#mywork'>Work</a>
                  </li>
                  {/* <li
                    tabIndex={0}
                    onClick={() => setIsHamburgerActive(!isHamburgerActive)}
                  >
                    <a>Let's Play</a>
                  </li> */}
                  <li
                    tabIndex={0}
                    onClick={() => setIsHamburgerActive(!isHamburgerActive)}
                  >
                    <a href='#projects'>Projects</a>
                  </li>
                </ul>
                {/* <div>
                  <a
                    target='_blank'
                    href='./Resume.pdf'
                    className='header-resume--btn'
                    onClick={() => setIsHamburgerActive(!isHamburgerActive)}
                  >
                    RESUME
                  </a>
                </div> */}
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
