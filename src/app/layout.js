import '../styles/styles.css';
import '../styles/globals.css';

export const metadata = {
  title: "Jonatan Ebenholm's Portfolio",
  description: "5th year student as Master of Science in Media Technology and Engineering - Portfolio showcasing projects in Computer Graphics, GPU programming, and game development",
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
