import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="nav  costume-nav">
        <Link to="/" className="site-title">
          Duckenson Dodor
        </Link>
        <ul>
          <CustomLink to="/portfolio">Portfolio</CustomLink>
          <CustomLink to="/about">About Me</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/resume">Resume</CustomLink>
        </ul>
      </nav>
    </>
  );
}

// creating a custom Component
function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
