import React from 'react';
import { FormGroup, InputGroup, Intent } from '@blueprintjs/core';

export const BaseInput = (props) => {
  const {
    id,
    placeholder,
    required,
    readonly,
    disabled,
    type,
    label,
    value,
    onChange,
    onBlur,
    onFocus,
    autofocus,
    options,
    schema,
    rawErrors = [],
    uiSchema,
  } = props;

  console.log(props);

  const _onChange = ({ target: { value } }) =>
    onChange(value === '' ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }) => onBlur(id, value);
  const _onFocus = ({ target: { value } }) => onFocus(id, value);
  const inputType =
    (type || schema.type) === 'string' ? 'text' : `${type || schema.type}`;

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
      <InputGroup
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        intent={rawErrors.length > 0 ? Intent.DANGER : null}
        list={schema.examples ? `examples_${id}` : undefined}
        autoFocus={autofocus}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        value={value}
        type={inputType}
      />
      {schema.examples ? (
        <datalist id={`examples_${id}`}>
          {schema.examples
            .concat(schema.default ? [schema.default] : [])
            .map((example) => {
              return <option key={example} value={example} />;
            })}
        </datalist>
      ) : null}
    </FormGroup>
  );
};
