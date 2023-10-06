import React from 'react';
import { FormGroup, Slider, Intent } from '@blueprintjs/core';
// import Form from 'react-bootstrap/Form';

import { utils } from '@rjsf/core';
// import { WidgetProps } from '@rjsf/core';

const { rangeSpec } = utils;

export const RangeWidget = ({
  value,
  readonly,
  disabled,
  onBlur,
  onFocus,
  options,
  schema,
  onChange,
  required,
  label,
  id,
  uiSchema,
  rawErrors = [],
}) => {
  const { step: stepSize, ...rangeProps } = rangeSpec(schema);
  let sliderProps = { value, label, id, stepSize, ...rangeProps };

  const _onChange = (value) => {
    onChange(value === '' ? options.emptyValue : value);
  };
  const _onBlur = (e) => {
    console.log(e);
    // onBlur(id, value);
  };
  const _onFocus = ({ target: { value } }) => onFocus(id, value);

  console.log(sliderProps);

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
      <Slider
        {...sliderProps}
        labelStepSize={10}
        // labelRenderer={false}
        onChange={_onChange}
        // labelRenderer={this.renderLabel3}
        // showTrackFill={false}
        value={value}
      />
    </FormGroup>
  );
};
