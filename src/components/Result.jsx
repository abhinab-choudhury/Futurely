import React from 'react';

function Result({ text, heading = '' }) {
  return (
    <div>
      <div className="underline font-bold">{heading}</div>
      <div className="font-serif font-thin my-4 text-xl">{text}</div>
    </div>
  );
}

export default Result;
