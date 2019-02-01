import React from 'react';
import { Icon } from 'semantic-ui-react';


const NoMatch = () => {
  return (
    <div className="nomatch">
      <h2>Page Not Found</h2>
      <Icon name="minus circle" size="big" />
      <strong>Oops! something went wrong. The page you are looking for no longer exists!</strong>
    </div>
  );
};

export default NoMatch;
