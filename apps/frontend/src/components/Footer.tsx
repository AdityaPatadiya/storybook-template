import React from 'react';

export interface FooterProps {
  /** Optional copyright text */
  copyright?: string;
  /** Social links: label and href */
  socialLinks?: { label: string; href: string }[];
}

/**
 * Footer component with a refined look: subtle background, centered content, and hover effects on links.
 */
export const Footer: React.FC<FooterProps> = ({
  copyright = `© ${new Date().getFullYear()} iHeart Radio. All rights reserved.`,
  socialLinks = [],
}) => {
  return (
    <footer
      style={{
        padding: '2rem 1rem',
        background: 'linear-gradient(180deg, #f9fafb 0%, #e5e7eb 100%)',
        borderTop: '1px solid #d1d5db',
        textAlign: 'center',
        color: '#111',
      }}
    >
      <div style={{ marginBottom: socialLinks.length ? '0.5rem' : 0 }}>{copyright}</div>
      {socialLinks.length > 0 && (
        <nav>
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              style={{
                margin: '0 0.75rem',
                color: '#111',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2563eb')}
              onMouseLeave={e => (e.currentTarget.style.color = '#111')}
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

