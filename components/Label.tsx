import clsx from 'clsx';

import { FCC } from '@/globalTypes';

export interface LabelProps {
  reverse?: boolean;
  type?: 'highlight' | 'primary' | 'secondary';
  className?: string;
}

const Label: FCC<LabelProps> = ({ children, className, reverse, type }) => {
  return (
    <p
      className={clsx('inline-flex items-center justify-center', {
        'flex-row': !reverse,
        'flex-row-reverse': reverse,
      })}>
      {type && (
        <span
          className={clsx('mx-3 h-2 w-2 rounded-full', {
            'bg-highlight': type === 'highlight',
            'bg-primary': type === 'primary',
            'bg-secondary': type === 'secondary',
          })}
        />
      )}
      <span className={className}>{children}</span>
    </p>
  );
};

export default Label;
