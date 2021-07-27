import { useEffect, useState, useCallback, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChevronLeft,
  faChevronDown,
  faStar,
  faPlus,
  faCog,
  faExternalLinkAlt,
  faSignOutAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as regularStar,
  faCommentDots,
  faBell,
  faUserCircle,
  faMoon,
} from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../../App';
import './Header.css';

function Header() {
  const [showSelect, setShowSelect] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  const dropDown = useCallback(
    (e) => {
      if (showSelect) {
        if (
          !e.target.matches('.header-select *') ||
          e.target.matches(
            '.header-select a, .header-select-dropdown-content-list *'
          )
        ) {
          setShowSelect(false);
        }
      }

      if (showProfile) {
        if (
          !e.target.matches('.header-profile *') ||
          e.target.matches(
            '.header-profile a,  .header-profile-dropdown-content-list *'
          )
        ) {
          setShowProfile(false);
        }
      }
    },
    [showSelect, showProfile]
  );

  useEffect(() => {
    document.addEventListener('click', dropDown);

    return () => document.removeEventListener('click', dropDown);
  }, [dropDown]);

  return (
    <header className="header">
      <a className="header-logo" aria-label="Home" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="header-logo-icon"
        >
          <g>
            <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
            <path
              fill="#FFF"
              d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
            ></path>
          </g>
        </svg>
        <svg
          className="header-logo-text"
          viewBox="0 0 57 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"></path>
            <circle fill="#FF4500" cx="47.26" cy="3.44" r="2.12"></circle>
            <path d="M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"></path>
            <path d="M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"></path>
            <path d="M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"></path>
            <path d="M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"></path>
            <path d="M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"></path>
          </g>
        </svg>
      </a>

      <div
        className={
          showSelect ? 'header-select header-select--visible' : 'header-select'
        }
      >
        <div
          className="header-select-button"
          onClick={() => {
            setShowSelect((prev) => !prev);
          }}
        >
          <FontAwesomeIcon
            className="header-select-button-home-icon"
            icon={faHome}
          />
          <h3>Home</h3>
          <div className="header-select-button-show-left-icon">
            <div className="header-select-button-show-left-icon-box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <FontAwesomeIcon
              className="header-select-button-show-left-icon-left"
              icon={faChevronLeft}
            />
          </div>
          <FontAwesomeIcon
            className="header-select-button-down"
            icon={faChevronDown}
          />
        </div>

        <div className="header-select-dropdown">
          <input
            type="text"
            placeholder="Filter"
            aria-label="Start typing to filter your communities or use up and down to select."
          />

          <div className="header-select-dropdown-content">
            <span>Favorites</span>
            <a href="/#" className="header-select-dropdown-content-list">
              <img
                src="https://b.thumbs.redditmedia.com/mD2HFHph0Md1vppzBWNoItU5TrAPLWbc7vNBfP3lsxA.png"
                alt="avatar"
              />
              <p>r/Amd</p>
              <FontAwesomeIcon
                className="header-select-dropdown-content-list-star--active"
                icon={faStar}
              />
            </a>
          </div>

          <div className="header-select-dropdown-content">
            <span>My communities</span>
            <a href="/#" className="header-select-dropdown-content-list">
              <FontAwesomeIcon
                className="header-select-dropdown-content-list-plus"
                icon={faPlus}
              />
              <p>Create Community</p>
            </a>

            <a href="/#" className="header-select-dropdown-content-list">
              <img
                src="https://b.thumbs.redditmedia.com/mD2HFHph0Md1vppzBWNoItU5TrAPLWbc7vNBfP3lsxA.png"
                alt="avatar"
              />
              <p>r/Amd</p>
              <FontAwesomeIcon
                className="header-select-dropdown-content-list-star"
                icon={regularStar}
              />
            </a>
          </div>
        </div>
      </div>

      <form
        tabIndex="0"
        autoComplete="off"
        role="search"
        className="header-form"
        onBlur={() => {
          setShowInput(false);
        }}
      >
        <label>
          <FontAwesomeIcon className="icon" icon={faSearch} />
        </label>
        <input
          type="search"
          name="search"
          placeholder="Search"
          onFocus={() => {
            setShowInput(true);
          }}
        />
        <div
          className={
            showInput
              ? 'header-form-dropdown header-form-dropdown--visible'
              : 'header-form-dropdown'
          }
        >
          <a href="/#" className="header-form-dropdown-content">
            <img
              src="https://b.thumbs.redditmedia.com/mD2HFHph0Md1vppzBWNoItU5TrAPLWbc7vNBfP3lsxA.png"
              alt="avatar"
            />
            <p>
              r/webdev <span>897,791 members</span>
            </p>
          </a>
        </div>
      </form>

      <a className="header-icon-container" href="/#">
        <FontAwesomeIcon
          className="header-icon-container-icon"
          icon={faCommentDots}
        />
      </a>
      <a className="header-icon-container" href="/#">
        <FontAwesomeIcon className="header-icon-container-icon" icon={faBell} />
      </a>
      <a className="header-icon-container" href="/#">
        <FontAwesomeIcon className="header-icon-container-icon" icon={faPlus} />
      </a>

      <div
        className={
          showProfile
            ? 'header-profile header-profile--visible'
            : 'header-profile'
        }
      >
        <div
          className="header-profile-button"
          onClick={() => {
            setShowProfile((prev) => !prev);
          }}
        >
          <div className="header-profile-button-img">
            <img
              src="https://b.thumbs.redditmedia.com/mD2HFHph0Md1vppzBWNoItU5TrAPLWbc7vNBfP3lsxA.png"
              alt="avatar"
            />
            <span></span>
          </div>
          <span>xander_here</span>
          <FontAwesomeIcon
            className="header-profile-button-icon"
            icon={faChevronDown}
          />
        </div>
        <div className="header-profile-dropdown">
          <div className="header-profile-dropdown-content">
            <span>online status</span>
            <div className="header-profile-dropdown-content-list">
              <p>On </p>
              <div
                className={theme === 'light' ? 'toggle toggle--off' : ' toggle'}
              ></div>
            </div>
          </div>

          <div className="header-profile-dropdown-content">
            <span>my stuff</span>
            <a href="/#" className="header-profile-dropdown-content-list">
              <FontAwesomeIcon
                className="header-profile-dropdown-content-list-icon"
                icon={faUserCircle}
              />
              <p>Profile</p>
            </a>
            <a href="/" className="header-profile-dropdown-content-list">
              <FontAwesomeIcon
                className="header-profile-dropdown-content-list-icon"
                icon={faCog}
              />
              <p>User Settings</p>
            </a>
          </div>

          <div className="header-profile-dropdown-content">
            <span>view options</span>
            <div
              className="header-profile-dropdown-content-list"
              onClick={() => {
                setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
              }}
            >
              <FontAwesomeIcon
                className="header-profile-dropdown-content-list-icon"
                icon={faMoon}
              />
              <p>Night Mode </p>

              <div
                className={theme === 'light' ? 'toggle toggle--off' : ' toggle'}
              ></div>
            </div>
          </div>

          <div className="header-profile-dropdown-content">
            <span>more stuff</span>
            <a className="header-profile-dropdown-content-list" href="/#">
              <FontAwesomeIcon
                className="header-profile-dropdown-content-list-plus"
                icon={faPlus}
              />
              <p>Create Community</p>
            </a>
            <a className="header-profile-dropdown-content-list" href="/#">
              <FontAwesomeIcon
                className="header-profile-dropdown-content-list-icon"
                icon={faExternalLinkAlt}
              />
              <p>visit old reddit</p>
            </a>
          </div>

          <div className="header-profile-dropdown-content header-profile-dropdown-content-logout">
            <span>more stuff</span>
            <a className="header-profile-dropdown-content-list" href="/#">
              <FontAwesomeIcon
                className="header-profile-dropdown-content-list-plus"
                icon={faSignOutAlt}
              />
              <p>Log Out</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
