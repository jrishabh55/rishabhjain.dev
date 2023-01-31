import clsx from 'clsx';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

import Card from './lib/Card';

export interface TestimonialCardProps {
  className?: string;
  name: string;
  position: string;
  company: string;
  companyIcon: string;
  testimonial: ReactNode;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ className, company, companyIcon, name, position, testimonial }) => {
  return (
    <Card className={clsx('relative max-w-md rounded-tl-none pt-6', className)} dark={false}>
      <span className="mask mask-squircle absolute -left-0 top-0 -ml-3 flex min-w-[70px] -translate-y-1/2 items-center justify-center bg-inherit p-3 text-center text-base font-bold text-primary">
        <Image unoptimized alt="Deuglo" className="aspect-1" height={22} src={companyIcon} width={22} />
      </span>
      <main className="space-y-5">
        <h1 className="flex flex-col text-xl font-bold text-dark-1">
          <span>
            {name} {position && <span className="text-xs">({position})</span>}
          </span>
          <small className="text-xs font-semibold">{company}</small>
        </h1>
        <div className="text-md leading-7">{testimonial}</div>
      </main>
    </Card>
  );
};

export default TestimonialCard;
