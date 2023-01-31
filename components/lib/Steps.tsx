import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

export interface StepProps {
  active?: boolean;
  completed?: boolean;
  className?: string;
  image?: string;
  index?: number;
  label?: string;
}

const Step: FC<StepProps> = ({ completed, image, index, label }) => {
  return (
    <div
      className={clsx('flex h-1 flex-grow items-center even:top-6', {
        'bg-gray-700': !completed,
        'bg-primary': completed,
      })}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow">
        <Image
          alt="check"
          className="aspect-1 rounded-full bg-slate-500 object-contain"
          height={32}
          src={image ?? 'https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg'}
          width={32}
        />
        <span
          className={clsx('absolute', {
            '-bottom-6': index % 2 !== 0,
            '-top-6': index % 2 === 0,
          })}>
          {label}
        </span>
      </div>
    </div>
  );
};

export interface StepsProps {
  active?: number;
  steps: Pick<StepProps, 'image' | 'label'>[];
}

const Steps: FC<StepsProps> = ({ steps = [], active = steps.length }) => {
  if (steps.length === 0) return null;
  return (
    <div className="flex h-10 items-center">
      <div className="flex h-1 w-full items-center justify-between bg-gray-700">
        {steps.map((step, i) => (
          <Step key={i} active={i + 1 === active} completed={i < active} index={i} {...step} />
        ))}
      </div>
    </div>
  );
};

export default Steps;
