import Link from 'next/link';

import { FCC } from '@/globalTypes';

export interface NavItem {
  name: string;
  href: string;
}

const NavItem: FCC<NavItem> = ({ href, name }) => {
  return (
    <Link className="border-b-2 border-b-transparent uppercase text-white hover:border-b-white" href={href}>
      {name}
    </Link>
  );
};

export interface NavbarProps {
  className?: string;
  items: NavItem[];
}

const Navbar: FCC<NavbarProps> = ({ items = [] }) => {
  return (
    <nav className="top-nav mr-24 flex justify-end space-x-10 py-8 text-lg">
      {items.map(({ href, name }) => (
        <NavItem key={name} href={href} name={name} />
      ))}
    </nav>
  );
};

export default Navbar;
