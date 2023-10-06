import React from 'react';
import { Checkbox } from '@blueprintjs/core';
import { utils } from '@rjsf/core';
// import Form from 'react-bootstrap/Form';

const { schemaRequiresTrueValue } = utils;

export const CheckboxWidget = (props) => {
  const {
    schema,
    id,
    value,
    disabled,
    readonly,
    label,
    autofocus,
    onBlur,
    onFocus,
    onChange,
    DescriptionField,
  } = props;

  const required = schemaRequiresTrueValue(schema);

  return (
    <div>
      {schema.description && (
        <DescriptionField description={schema.description} />
      )}
      <Checkbox
        id={id}
        checked={typeof value === 'undefined' ? false : value}
        required={required}
        disabled={disabled || readonly}
        autoFocus={autofocus}
        type="checkbox"
        onChange={(event) => onChange(event.target.checked)}
        onBlur={onBlur && ((event) => onBlur(id, event.target.checked))}
        onFocus={onFocus && ((event) => onFocus(id, event.target.checked))}
      >
        {label}
      </Checkbox>
    </div>
  );
};
