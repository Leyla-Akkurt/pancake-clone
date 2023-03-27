/* MenuButton props are 'target' (contains name and href), 
   'altTarget' (contains svg's name), 'innerLinks' (contains the inner menu targets) */

const InnerMenu = ({ links }) => {
  // renders the inner links
  return (
    <div className="inner-menu">
      {links &&
        links.map((link, index) => {
          return (
            <div key={index + link.name} className="inner-menu-btn">
              {/* simple - plain links */}
              {link.type === 'null' && <a href={link.href}>{link.name}</a>}
              {/* exit links */}
              {link.type === 'exit' && (
                <a href={link.href}>
                  <div className="exit-link">
                    {link.name}
                    <img
                      src="./images/svg/exit.svg"
                      alt="exit icon"
                      className="exit-icon"
                    />
                  </div>
                </a>
              )}
              {/* exit link = vote now */}
              {link.type === 'VOTE NOW' && (
                <a href={link.href}>
                  {link.name}
                  <div className="vote-now">{link.type}</div>
                </a>
              )}
              {/* HR - cosmetic */}
              {link.type === 'hrCosmetic' && <hr className="hr-cosmetic" />}
            </div>
          );
        })}
    </div>
  );
};

const MenuButton = ({ target, altTarget, innerLinks, mobile }) => {
  return (
    <div className="menu-button-container">
      <div
        className={
          mobile
            ? 'menu-button-wrapper btn-hover mobile'
            : 'menu-button-wrapper btn-hover'
        }
      >
        {mobile ? (
          <div className="mobile-menu-item">
            {target ? (
              <button>
                <img src={mobile.src} alt={mobile.alt} />
                {target.name}
              </button>
            ) : (
              <button className="alt-target">
                {altTarget.svgName === 'three-dots' && (
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="three-dots-svg"
                    height="24"
                  >
                    <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
                  </svg>
                )}
              </button>
            )}
          </div>
        ) : (
          <div className="main-button">
            {target ? (
              <a href={target.href}>{target.name}</a>
            ) : (
              <a href="/" className="alt-target">
                {altTarget.svgName === 'three-dots' && (
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="three-dots-svg"
                    height="24"
                  >
                    <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
                  </svg>
                )}
              </a>
            )}
          </div>
        )}
        {innerLinks && <InnerMenu links={innerLinks} />}
      </div>
    </div>
  );
};

export default MenuButton;
