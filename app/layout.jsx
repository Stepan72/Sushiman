import '../styles/global.css';

export const metadata = {
  title: 'Sushiman',
  description: 'The best service to order delicious sushi!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../public/favicon.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
