import '../styles/globals.scss';

import Navbar from '@/components/Navbar';

const navItems = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/#skills',
    name: 'Skills',
  },
  {
    href: '/',
    name: 'Home 2',
  },
  {
    href: '/',
    name: 'Home 3',
  },
  {
    href: '/',
    name: 'Home 4',
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Head</title>
      </head>
      <body className="min-h-screen bg-gradient-to-tr from-primary via-primary to-secondary bg-no-repeat">
        <main className="container mx-auto">
          <Navbar items={navItems} />
          {children}
        </main>
      </body>
    </html>
  );
}
