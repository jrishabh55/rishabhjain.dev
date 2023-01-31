import clsx from 'clsx';

import { FCC } from '@/globalTypes';

// split border radios props from Config['theme']['borderRadius'] to '2xl', '3xl' etc

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | 'none';

export interface CardProps {
  className?: string;
  dark?: boolean;
  rounded?: Sizes;
}

const Card: FCC<CardProps> = ({ children, className, dark = true, rounded = 'lg' }) => (
  <section
    className={clsx('z-10 p-4', className, {
      'bg-gradient-to-br from-dark-1 via-dark-2 to-dark-1': dark,
      'bg-white': !dark,
      'rounded-2xl': rounded === '2xl',
      'rounded-3xl': rounded === '3xl',
      'rounded-full': rounded === 'full',
      'rounded-lg': rounded === 'lg',
      'rounded-md': rounded === 'md',
      'rounded-none': rounded === 'none',
      'rounded-sm': rounded === 'sm',
      'rounded-xl': rounded === 'xl',
      'rounded-xs': rounded === 'xs',
    })}>
    {children}
  </section>
);

export default Card;
