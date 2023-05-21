import '../styles/global.css';
import React from 'react';

export const metadata = {
  title: 'Sushiman',
  description: 'The best service to order delicious sushi!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
