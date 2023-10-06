import React from 'react';
import { Checkbox, Label } from '@blueprintjs/core';

const selectValue = (value, selected, all) => {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));

  // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order
  return updated.sort((a, b) => all.indexOf(a) > all.indexOf(b));
};

const deselectValue = (value, selected) => {
  return selected.filter((v) => v !== value);
};

export const CheckboxesWidget = ({
  schema,
  label,
  id,
  disabled,
  options,
  value,
  autofocus,
  readonly,
  required,
  onChange,
  onBlur,
  onFocus,
}) => {
  const { enumOptions, enumDisabled, inline } = options;

  const _onChange =
    (option) =>
    ({ target: { checked } }) => {
      const all = enumOptions.map(({ value }) => value);

      if (checked) {
        onChange(selectValue(option.value, value, all));
      } else {
        onChange(deselectValue(option.value, value));
      }
    };

  const _onBlur = ({ target: { value } }) => onBlur(id, value);
  const _onFocus = ({ target: { value } }) => onFocus(id, value);

  return (
    <>
      <Label htmlFor={id}>{label || schema.title}</Label>
      {enumOptions.map((option, index) => {
        const checked = value.indexOf(option.value) !== -1;
        const itemDisabled =
          enumDisabled && enumDisabled.indexOf(option.value) != -1;

        return (
          <Checkbox
            key={`${id}_${index}`}
            id={`${id}_${index}`}
            label={option.label}
            required={required}
            inline={inline}
            checked={checked}
            autoFocus={autofocus && index === 0}
            onChange={_onChange(option)}
            onBlur={_onBlur}
            onFocus={_onFocus}
            disabled={disabled || itemDisabled || readonly}
          />
        );
      })}
    </>
  );
};
