import React from 'react';
import { FormGroup, NumericInput } from '@blueprintjs/core';
// import Form from "react-bootstrap/Form";

// import { WidgetProps } from "@rjsf/core";

export const UpDownWidget = ({
  id,
  required,
  readonly,
  disabled,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  schema,
  uiSchema,
  rawErrors = [],
  placeholder,
}) => {
  const _onChange = (value) => {
    onChange(value);
  };
  const _onBlur = ({ target: { value } }) => onBlur(id, value);
  const _onFocus = ({ target: { value } }) => onFocus(id, value);

  return (
    <>
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
        <NumericInput
          placeholder={placeholder}
          onValueChange={_onChange}
          disabled={disabled}
          readOnly={readonly}
          intent={rawErrors.length > 0 ? Intent.DANGER : null}
          autoFocus={autofocus}
          onChange={_onChange}
          onBlur={_onBlur}
          onFocus={_onFocus}
          value={value}
          fill
        />
      </FormGroup>
    </>
  );
};
