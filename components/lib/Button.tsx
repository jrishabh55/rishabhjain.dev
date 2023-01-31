'use client';
import clsx from 'clsx';
import { MouseEventHandler } from 'react';

import { FCC } from '@/globalTypes';

export interface ButtonProps {
  type?: 'primary' | 'secondary';
  className?: string;
  onClick?: MouseEventHandler;
}

const Button: FCC<ButtonProps> = ({ children, className, onClick, type = 'primary' }) => {
  return (
    <button
      className={clsx('btn flex-grow', className, {
        'bg-gradient-to-b from-secondary to-primary text-gray-700': type === 'primary',
        'bg-highlight text-gray-200': type === 'secondary',
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
