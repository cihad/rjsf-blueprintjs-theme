import React from 'react';
import { Callout, Intent } from '@blueprintjs/core';

const DescriptionField = ({ description }) => {
  if (!description) {
    return null;
  }

  return (
    <Callout
      style={{ marginBottom: '1em' }}
      icon="info-sign"
      intent={Intent.PRIMARY}
    >
      {description}
    </Callout>
  );
};

export default DescriptionField;
