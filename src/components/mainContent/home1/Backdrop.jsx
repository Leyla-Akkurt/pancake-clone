import { useContext } from 'react';
import ThemeContext from '../../contexts/theme/ThemeContext';

const Backdrop = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home-1-backdrop">
      <div className="home-1-backdrop-container">
        {/* true = dark */}
        {theme ? (
          <svg
            viewBox="0 0 1660 339"
            className="home-1-backdrop-svg"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"
              fill="url(#paint0_linear_dark)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_dark"
                x1="830"
                y1="83.5"
                x2="830"
                y2="338.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#08060B" stopOpacity="0.2"></stop>
                <stop
                  offset="0.545554"
                  stopColor="#08060B"
                  stopOpacity="0.5"
                ></stop>
                <stop offset="1" stopColor="#08060B"></stop>
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            viewBox="0 0 1660 339"
            className="home-1-backdrop-svg"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M804 167.023C520.5 167.023 267.5 290.522 0 304.5V339H1660V0.5C1358.83 0.5 1104 167.023 804 167.023Z"
              fill="url(#paint0_linear_light)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_light"
                x1="830"
                y1="84"
                x2="830"
                y2="339"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0.48"></stop>
                <stop
                  offset="0.566389"
                  stopColor="white"
                  stopOpacity="0.35"
                ></stop>
                <stop offset="1" stopColor="white"></stop>
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>
    </div>
  );
};

export default Backdrop;
