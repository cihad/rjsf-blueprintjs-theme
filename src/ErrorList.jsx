import React from 'react';
import { Intent, Callout, Text } from '@blueprintjs/core';

const ErrorList = ({ errors }) => (
  <Callout title="Errors" intent={Intent.DANGER} style={{ marginBottom: 10 }}>
    {errors.map((error, i) => {
      return <Text key={i}>{error.stack}</Text>;
    })}
  </Callout>
);

export default ErrorList;
