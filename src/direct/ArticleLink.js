import React from 'react';

const ArticleLink = () => {
  const link = "https://www.icai.org/post.html?post_id=505#:~:text=Common%20Proficiency%20Test%20is%20an,%2C%20M.Com%2C%20LL.";

  return (
    <div id="step4" style={{ position: 'relative' }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Article Ship
      </a>
    </div>
  );
};

export default ArticleLink;