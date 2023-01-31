import Link from 'next/link';

import Navbar from './Navbar';

const navItems = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: 'https://linkedin.com/in/jrishabh55',
    name: 'Linkedin',
  },
];

const MainHeader = () => (
  <header className="z-10 mb-10 rounded-lg bg-no-repeat shadow-lg shadow-secondary/30">
    <div className="container mx-auto flex items-center justify-between">
      <h2 className="z-10 text-4xl text-white">
        <Link href="/">Rishabh Jain</Link>
      </h2>
      <Navbar items={navItems} />
    </div>
  </header>
);

export default MainHeader;
