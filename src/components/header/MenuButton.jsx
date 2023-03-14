/* MenuButton props are 'target' (contains name and href), 
   'altTarget' (contains src and alt), 'innerLinks' (contains the inner menu targets) */

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
                <img src={altTarget.src} alt={altTarget.alt} />
              </button>
            )}
          </div>
        ) : (
          <div className="main-button">
            {target ? (
              <a href={target.href}>{target.name}</a>
            ) : (
              <a href="/" className="alt-target">
                <img src={altTarget.src} alt={altTarget.alt} />
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
