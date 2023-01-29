import Image from 'next/image';

import Label from '@/components/Label';
import Card from '@/components/lib/Card';
import Steps from '@/components/lib/Steps';

const HomePage = () => {
  return (
    <div className="flex flex-row gap-5">
      <Card className="flex-grow">this is card</Card>
      <Card className="w-full max-w-xl">
        <header className="flex justify-between">
          <Label type="primary">Engineer</Label>
          <Label reverse type="primary">
            Entrepreneur
          </Label>
        </header>
        <main className="p-7">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold">Rishabh Jain</h1>
              <p className="mt-4 text-xs text-gray-500">This is a caption. This is a caption. This is a caption.</p>
            </div>
            <div>
              <div className="mx-auto w-28">
                <Image alt="Rishabh Jain" height={100} src="https://codeation.io/images/team_avatar.svg" width={100} />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="mb-5 text-xs text-gray-200">Career Timeline</p>
            <Steps
              active={2}
              steps={[
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
              ]}
            />
          </div>
        </main>
      </Card>
    </div>
  );
};

export default HomePage;
