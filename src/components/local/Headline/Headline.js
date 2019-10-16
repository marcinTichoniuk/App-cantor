import React from 'react';

const Headline = ({ className, converter }) => {
  return (
    <div className={className}>
      <h2>1 EURO = <span> {converter} zł</span></h2>
    </div>
  );
}

export default Headline;