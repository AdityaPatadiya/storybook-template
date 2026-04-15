import React from 'react';

export interface FooterProps {
  /** Optional copyright text */
  copyright?: string;
  /** Social links: label and href */
  socialLinks?: { label: string; href: string }[];
}

/**
 * Footer component with legal information and optional social media links.
 */
export const Footer: React.FC<FooterProps> = ({
  copyright = `© ${new Date().getFullYear()} iHeart Radio. All rights reserved.`,
  socialLinks = [],
}) => {
  return (
    <footer
      style={{
        padding: '2rem',
        backgroundColor: '#f3f4f6',
        borderTop: '1px solid #e5e7eb',
        textAlign: 'center',
      }}
    >
      <div>{copyright}</div>
      {socialLinks.length > 0 && (
        <nav style={{ marginTop: '0.5rem' }}>
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              style={{ margin: '0 0.5rem', color: '#111', textDecoration: 'none' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </footer>
  );
};

export default Footer;

