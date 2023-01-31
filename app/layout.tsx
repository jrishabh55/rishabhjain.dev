import '../styles/globals.scss';

import MainFooter from '@/components/MainFooter';
import MainHeader from '@/components/MainHeader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Rishabh Jain | rishabhjain.dev</title>
      </head>
      <body className="bg-gradient min-h-screen bg-no-repeat" data-theme="data-theme">
        <div className="main-bg space-y-6">
          <MainHeader />
          <main className="container mx-auto">{children}</main>
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
