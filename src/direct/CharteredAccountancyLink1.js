// CharteredAccountancyLink.js

import React from 'react';

const CharteredAccountancyLink1 = () => {
  const link = "https://www.careers360.com/courses/chartered-accountancy-course#:~:text=Completion%20of%20an%20undergraduate%20degree,at%20least%2060%20percent%20aggregate.&text=There%20is%20no%20minimum%20fee,the%20exam%20by%20the%20colleges.&text=There%20is%20no%20maximum%20fee%20limit%20for%20chartered%20accountancy.";

  return (
    <div id="step3" style={{ position: 'relative' }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Undergraduate Student
      </a>
    </div>
  );
};

export default CharteredAccountancyLink1;
