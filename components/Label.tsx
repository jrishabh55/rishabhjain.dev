import clsx from 'clsx';

import { FCC } from '@/globalTypes';

export interface LabelProps {
  reverse?: boolean;
  type?: 'highlight' | 'primary' | 'secondary';
  className?: string;
}

const Label: FCC<LabelProps> = ({ children, className, reverse, type }) => {
  return (
    <li
      className={clsx('inline-flex items-center', {
        'flex-row': !reverse,
        'flex-row-reverse': reverse,
      })}>
      {type && (
        <span
          className={clsx(' h-2 w-2 rounded-full', {
            'bg-highlight': type === 'highlight',
            'bg-primary': type === 'primary',
            'bg-secondary': type === 'secondary',
            'ml-3': reverse,
            'mr-3': !reverse,
          })}
        />
      )}
      <span className={className}>{children}</span>
    </li>
  );
};

export default Label;
