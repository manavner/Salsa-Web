export const metadata = {
  title: 'Salsa Steps Catalog - by Avner Man',
  description: 'חפש, סנן והפעל סרטוני הדגמה לצעדי סלסה ורואדה',
  manifest: '/manifest.json',
  icons: { icon: '/favicon.png', apple: '/icon.png' },
  themeColor: '#e11d48',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#0a0a0a', fontFamily: "'Heebo', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
