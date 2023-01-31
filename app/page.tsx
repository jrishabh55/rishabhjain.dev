import Image from 'next/image';

import SkillChart from '@/components/SkillChart';
import SkillsCard from '@/components/SkillsCard';
import TestimonialCard from '@/components/TestimonialCard';

const HomePage = () => {
  return (
    <div className="space-y-20">
      <section className="flex flex-row gap-5">
        <div className="flex flex-grow items-center justify-center">
          <div className="avatar">
            <div className="w-[500px] rounded-xl bg-secondary/40 p-7">
              <Image
                alt={'Rishabh'}
                className="-scale-x-100 rounded-md object-cover"
                height={900}
                src="/rishabh-cartoonize.png"
                width={700}
              />
            </div>
          </div>
        </div>
        <SkillsCard />
      </section>
      <section className="flex justify-center gap-10">
        <TestimonialCard
          className="flex-grow"
          company="Deuglo"
          companyIcon="https://www.deuglo.com/wp-content/uploads/2018/07/rect28.png"
          name="Sujit Thakur"
          position="CEO"
          testimonial={
            <>
              We connected with <u>Rishabh</u> after a long time of searching for a company&lsquo;s can help us with a customized dashboard
              solution. We are an education company and wanted a customized dashboard solution to set up the complete process and make the
              in-house communication and operational work easy. They work very professionally and within deadlines.
            </>
          }
        />
        <TestimonialCard
          className="flex-grow"
          company="VK Soft Solutions"
          companyIcon="https://www.vksoftsolutions.com/wp-content/uploads/2022/02/cropped-VK-Soft-Solutions-01-32x32.png"
          name="Varun Kumar"
          position="CEO & Founder"
          testimonial={
            <>
              I got a reference for <u>Rishabh</u> from one of my clients. He is a super amazing guy and knows what he is working at. We had
              various meetings and detailed calls on the app that I wanted them to make. The complete team is very apt in their work. The
              feedback was always taken on board and implemented without any hesitation.
            </>
          }
        />

        <SkillChart />
      </section>
    </div>
  );
};

export default HomePage;
