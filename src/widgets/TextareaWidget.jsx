import React from 'react';
import { FormGroup, Intent, TextArea } from '@blueprintjs/core';
// import { WidgetProps } from "@rjsf/core";
// import FormControl from "react-bootstrap/FormControl";
// import InputGroup from "react-bootstrap/InputGroup";

// type CustomWidgetProps = WidgetProps & {
//   options: any;
// };

export const TextareaWidget = ({
  id,
  placeholder,
  value,
  required,
  disabled,
  autofocus,
  label,
  readonly,
  onBlur,
  onFocus,
  onChange,
  options,
  schema,
  rawErrors = [],
  uiSchema,
}) => {
  const _onChange = ({ target: { value } }) =>
    onChange(value === '' ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }) => onBlur(id, value);
  const _onFocus = ({ target: { value } }) => onFocus(id, value);

  return (
    <FormGroup
      disabled={disabled}
      helperText={uiSchema['ui:description'] || schema.description}
      intent={rawErrors.length > 0 ? Intent.DANGER : null}
      label={uiSchema['ui:title'] || schema.title || label}
      labelFor={id}
      labelInfo={
        (label || uiSchema['ui:title'] || schema.title) && required
          ? '(required)'
          : null
      }
    >
      <TextArea
        id={id}
        growVertically={true}
        onChange={_onChange}
        value={value}
        fill
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        autoFocus={autofocus}
        rows={options.rows || 5}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </FormGroup>
  );
};
