import React from 'react';
import { RadioGroup, Radio, FormGroup } from '@blueprintjs/core';
// import Form from "react-bootstrap/Form";

// import { WidgetProps } from "@rjsf/core";

export const RadioWidget = ({
  id,
  schema,
  options,
  value,
  required,
  disabled,
  readonly,
  label,
  onChange,
  onBlur,
  onFocus,
  uiSchema,
  rawErrors = [],
}) => {
  const { enumOptions, enumDisabled } = options;

  const _onChange = ({ target: { value } }) => {
    onChange(schema.type == 'boolean' ? value !== 'false' : +value);
  };
  const _onBlur = ({ target: { value } }) => onBlur(id, value);
  const _onFocus = ({ target: { value } }) => onFocus(id, value);

  const inline = Boolean(options?.inline);

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
      <RadioGroup
        onChange={_onChange}
        selectedValue={value}
        inline={inline}
        disabled={disabled}
      >
        {enumOptions.map((option, i) => {
          console.log(option.value);
          const itemDisabled =
            Array.isArray(enumDisabled) &&
            enumDisabled.indexOf(option.value) !== -1;

          return (
            <Radio
              key={i}
              label={option.label}
              id={option.label}
              required={required}
              value={option.value}
              disabled={disabled || itemDisabled || readonly}
            />
          );
        })}
      </RadioGroup>
    </FormGroup>
  );
};
