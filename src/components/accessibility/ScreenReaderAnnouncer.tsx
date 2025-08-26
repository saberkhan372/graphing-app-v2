import React from 'react';

interface Props {
  message: string;
}

const ScreenReaderAnnouncer: React.FC<Props> = ({ message }) => (
  <div
    aria-live="polite"
    style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}
  >
    {message}
  </div>
);

export default ScreenReaderAnnouncer;
