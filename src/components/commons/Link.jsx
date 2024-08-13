import React from 'react';

export default function Link({ to, children, className }) {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
}
