import React from 'react';

export interface HeaderProps {
  /** URL of the logo image */
  logoSrc?: string;
  /** Navigation items displayed to the right of the logo */
  navItems?: { label: string; href: string }[];
}

/**
 * Header component with a wide logo (fixed 150 px) and optional navigation links.
 * Updated styling for a cleaner, more modern look.
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
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }}
    >
      <img
        src={logoSrc}
        alt="Logo"
        style={{ width: 150, height: 'auto' }}
      />
      {navItems.length > 0 && (
        <nav>
          <ul
            style={{
              display: 'flex',
              gap: '1.5rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  style={{
                    textDecoration: 'none',
                    color: '#111',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#2563eb')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#111')}
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

