'use client';

import Button from './lib/Button';

const ConnectWithMeButton = () => (
  <Button
    type="secondary"
    onClick={() => {
      window.open('mailto:hello@rishabhjain.dev');
    }}>
    Connect With me
  </Button>
);

export default ConnectWithMeButton;
