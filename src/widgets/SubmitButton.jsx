import React from 'react';
import { utils } from '@rjsf/core';
import { Button, Intent } from '@blueprintjs/core';

const { getSubmitButtonOptions } = utils;

export function SubmitButton({ uiSchema }) {
  const {
    submitText,
    norender,
    props: submitButtonProps,
  } = getSubmitButtonOptions(uiSchema);
  return (
    <div
      style={{
        position: 'sticky',
        bottom: 0,
        padding: '1em 0',
        background: '#fff',
      }}
    >
      {!norender && (
        <Button type="submit" intent={Intent.PRIMARY} {...submitButtonProps}>
          {submitText}
        </Button>
      )}
    </div>
  );
}
