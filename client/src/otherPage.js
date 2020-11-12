import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
  return (
    <div>
      <p>This is other page return </p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default OtherPage;
