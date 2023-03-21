import SettingsInnerMenu from '../header/SettingsInnerMenu';

const ContentWrapper = ({ hasOverlay, hasOverlayHandler, children }) => {
  const AddOverlay = () => {
    const handleClick = () => hasOverlayHandler(!hasOverlay);

    return (
      <div id="content-overlay" className="requires-no-scroll">
        <div
          className="content-overlay-neutral-area"
          onClick={handleClick}
          role={'presentation'}
        ></div>
        <SettingsInnerMenu
          hasOverlay={hasOverlay}
          hasOverlayHandler={hasOverlayHandler}
        />
      </div>
    );
  };

  return (
    <>
      <div className="content-wrapper">{children}</div>
      {hasOverlay && <AddOverlay />}
    </>
  );
};

export default ContentWrapper;
