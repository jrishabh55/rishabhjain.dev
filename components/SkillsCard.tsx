import Image from 'next/image';

import ConnectWithMeButton from './ConnectWithMeButton';
import Label from './Label';
import Button from './lib/Button';
import Card from './lib/Card';
import Steps from './lib/Steps';

const timelineSteps = [
  {
    image: 'https://codeation.io/images/team_avatar.svg',
  },
  {
    image: 'https://codeation.io/images/team_avatar.svg',
  },
  {
    image: 'https://codeation.io/images/team_avatar.svg',
  },
  {
    image: 'https://codeation.io/images/team_avatar.svg',
  },
  {
    image: 'https://codeation.io/images/team_avatar.svg',
  },
];

const SkillsCard = () => {
  return (
    <Card className="w-full min-w-[36rem] max-w-xl" rounded="3xl">
      <header className="flex justify-between px-3">
        <Label type="primary">Engineer</Label>
        <Label reverse type="primary">
          Entrepreneur
        </Label>
      </header>
      <main className="space-y-5 p-7">
        <section className="grid grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold">Rishabh Jain</h1>
            <p className="mt-4 text-xs text-gray-500">This is a caption. This is a caption. This is a caption.</p>
          </div>
          <div>
            <div className="mx-auto w-28">
              <Image alt="Rishabh Jain" height={100} src="https://codeation.io/images/team_avatar.svg" width={100} />
            </div>
          </div>
        </section>
        <section>
          <p className="mb-5 text-xs text-gray-200">Career Timeline</p>
          <Steps steps={timelineSteps} />
        </section>
        <section className="flex flex-col">
          <p className="mb-5 text-xs text-gray-200">Skills</p>
          <ul className="grid grid-cols-4 text-left text-base">
            <Label type="primary">React</Label>
            <Label type="primary">Next.js</Label>
            <Label type="primary">Tailwind</Label>
            <Label type="primary">TypeScript</Label>
            <Label type="primary">Node.Js</Label>
            <Label type="primary">Python</Label>
            <Label type="primary">Django</Label>
            <Label type="primary">Agile</Label>
          </ul>
        </section>
      </main>
      <footer className="mt-5 flex gap-5 px-10">
        <ConnectWithMeButton />
      </footer>
    </Card>
  );
};

export default SkillsCard;
