import clsx from 'clsx';

import { FCC } from '@/globalTypes';

export interface CardProps {
  className?: string;
}

const Card: FCC<CardProps> = ({ children, className }) => (
  <section className={clsx('rounded-3xl bg-gradient-to-br from-dark-1 via-dark-2 to-dark-1 p-4', className)}>{children}</section>
);

export default Card;
