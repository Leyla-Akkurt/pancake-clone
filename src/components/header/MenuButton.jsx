/* MenuButton props are 'target' (contains name and href), 
   'altTarget' (contains src and alt), 'innerLinks' (contains the inner menu targets) */

const InnerMenu = ({ links }) => {
  return (
    <div className="inner-menu">
      {links &&
        links.map((link, index) => {
          return (
            <div key={index+link.name} className="inner-menu-btn">
              <a href={link.href}>{link.name}</a>
            </div>
          );
        })}
    </div>
  );
};

const MenuButton = ({ target, altTarget, innerLinks }) => {
  return (
    <div className="menu-button-container">
      <div className="menu-button-wrapper btn-hover">
        <div className="main-button">
          {target ? (
            <a href={target.href}>{target.name}</a>
          ) : (
            <a href="/" className="alt-target">
              <img src={altTarget.src} alt={altTarget.alt} />
            </a>
          )}
        </div>
      </div>
      {innerLinks && <InnerMenu links={innerLinks} />}
    </div>
  );
};

export default MenuButton;
