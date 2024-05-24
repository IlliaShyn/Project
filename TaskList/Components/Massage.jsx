import React from 'react';

const InfoMessage = ({ text }) => {
  return <div style={{ color: 'blue' }}>{text}</div>;
};

export default InfoMessage;

// Usage
// <InfoMessage text="This is an informational message." />