import React from 'react';
import { Classes } from '@blueprintjs/core';
import { TITLE_FIELD } from './classNames';

const TitleField = (props) => {
  console.log('props', props);
  const { title, uiSchema, as: As = 'legend' } = props;

  return (
    <As className={`${Classes.HEADING} ${TITLE_FIELD}`}>
      {(uiSchema && uiSchema['ui:title']) || title}
    </As>
  );
};

export default TitleField;
