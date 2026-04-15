import React from 'react';

export interface HeaderProps {
  /** URL of the logo image */
  logoSrc?: string;
  /** Navigation items displayed to the right of the logo */
  navItems?: { label: string; href: string }[];
}

/**
 * Header component with a wide logo (fixed 200 px) and optional navigation links.
 */
export const Header: React.FC<HeaderProps> = ({
  logoSrc = '/logo.svg',
  navItems = [],
}) => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <img
        src={logoSrc}
        alt="Logo"
        style={{ width: 200, height: 'auto' }}
      />
      {navItems.length > 0 && (
        <nav>
          <ul
            style={{
              display: 'flex',
              gap: '1rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  style={{ textDecoration: 'none', color: '#111' }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

