import React from 'react';

interface Props {
  latex: string;
}

const MathMLRenderer: React.FC<Props> = ({ latex }) => (
  <span role="math">{latex}</span>
);

export default MathMLRenderer;
