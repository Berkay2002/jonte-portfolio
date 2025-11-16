import '../styles/styles.css';
import '../styles/globals.css';

export const metadata = {
  title: {
    default: 'Jonte - Portfolio',
    template: '%s | Jonte',
  },
  description: 'Portfolio website showcasing creative projects, WebGL experiments, and interactive experiences by Jonte',
  keywords: ['portfolio', 'web development', 'WebGL', 'graphics', 'interactive design', 'creative coding', 'Jonte'],
  authors: [{ name: 'Jonte' }],
  creator: 'Jonte',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Jonte Portfolio',
    title: 'Jonte - Portfolio',
    description: 'Portfolio website showcasing creative projects, WebGL experiments, and interactive experiences',
  },
  charset: 'utf-8',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
