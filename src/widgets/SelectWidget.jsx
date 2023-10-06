import React from 'react';
import { HTMLSelect, FormGroup, Intent } from '@blueprintjs/core';

// import Form from "react-bootstrap/Form";

// import { WidgetProps } from "@rjsf/core";
import { utils } from '@rjsf/core';
import classes from '../styles/SelectWidget.module.css';

const { asNumber, guessType, getDefaultRegistry } = utils;

const nums = new Set(['number', 'integer']);

/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
const processValue = (schema, value) => {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  const { type, items } = schema;
  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return asNumber(value);
  }

  // If type is undefined, but an enum is present, try and infer the type from
  // the enum values
  if (schema.enum) {
    if (schema.enum.every((x) => guessType(x) === 'number')) {
      return asNumber(value);
    } else if (schema.enum.every((x) => guessType(x) === 'boolean')) {
      return value === 'true';
    }
  }

  return value;
};

const registry = getDefaultRegistry();

export const SelectWidget = (props) => {
  const {
    schema,
    uiSchema = {},
    id,
    options,
    label,
    required,
    disabled,
    readonly,
    value,
    multiple,
    autofocus,
    onChange,
    onBlur,
    onFocus,
    placeholder,
    rawErrors = [],
  } = props;
  const { enumOptions, enumDisabled } = options;

  const emptyValue = multiple ? [] : '';

  function getValue(event, multiple) {
    if (multiple) {
      return [].slice
        .call(event.target.options)
        .filter((o) => o.selected)
        .map((o) => o.value);
    } else {
      return event.target.value;
    }
  }

  const emptyOption = { value: '', label: placeholder || '' };

  console.log(uiSchema);

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
      {multiple ? (
        <div className={classes.selectWrapper}>
          <registry.widgets.SelectWidget {...props} />
        </div>
      ) : (
        <HTMLSelect
          id={id}
          value={typeof value === 'undefined' ? emptyValue : value}
          fill
          options={
            !multiple && schema.default === undefined
              ? [emptyOption, ...enumOptions]
              : enumOptions
          }
          disabled={disabled}
          required={required}
          multiple={multiple}
          readOnly={readonly}
          autoFocus={autofocus}
          onBlur={
            onBlur &&
            ((event) => {
              const newValue = getValue(event, multiple);
              onBlur(id, processValue(schema, newValue));
            })
          }
          onFocus={
            onFocus &&
            ((event) => {
              const newValue = getValue(event, multiple);
              onFocus(id, processValue(schema, newValue));
            })
          }
          onChange={(event) => {
            const newValue = getValue(event, multiple);
            onChange(processValue(schema, newValue));
          }}
        />
      )}
    </FormGroup>
  );
};
