import React from 'react';

export interface FooterLinkProps {
  href: string;
  label: string;
}

/** Simple link used in the Footer component */
export const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => (
  <a
    href={href}
    style={{
      margin: '0 0.5rem',
      color: '#111',
      textDecoration: 'none',
    }}
  >
    {label}
  </a>
);

export default FooterLink;

