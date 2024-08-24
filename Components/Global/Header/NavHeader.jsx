const NavHeader = () => {
  return (
    <div className="nav-header">
      <a href="/" className="brand-logo">
       DeCare
      </a>
      <div className="nav-control">
        <div className="hamburger">
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
