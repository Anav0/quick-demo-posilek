import React from 'react';
import Helmet from 'react-helmet';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Helmet lang="pl" title="Quick Demo" />
      {children}
    </>
  );
};

export default MainTemplate;
