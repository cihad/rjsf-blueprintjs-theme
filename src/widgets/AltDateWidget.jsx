import React, { useEffect, useState, useMemo } from 'react';
import { utils } from '@rjsf/core';
import { Button, ButtonGroup, FormGroup } from '@blueprintjs/core';
const { parseDateString, toDateString, pad } = utils;

function rangeOptions(start, stop) {
  let options = [];
  for (let i = start; i <= stop; i++) {
    options.push({ value: i, label: pad(i, 2) });
  }
  return options;
}

function readyForChange(state) {
  return Object.keys(state).every((key) => state[key] !== -1);
}

function DateElement(props) {
  const {
    type,
    range,
    value,
    select,
    rootId,
    disabled,
    readonly,
    autofocus,
    registry,
    onBlur,
  } = props;
  const id = rootId + '_' + type;
  const { SelectWidget } = registry.widgets;
  return (
    <SelectWidget
      schema={{ type: 'integer' }}
      id={id}
      className="form-control"
      options={{ enumOptions: rangeOptions(range[0], range[1]) }}
      placeholder={type}
      value={value}
      disabled={disabled}
      readonly={readonly}
      autofocus={autofocus}
      onChange={(value) => select(type, value)}
      onBlur={onBlur}
    />
  );
}

export function AltDateWidget(props) {
  const {
    id,
    schema,
    uiSchema,
    label,
    required,
    time = false,
    disabled = false,
    readonly = false,
    autofocus = false,
    options = {
      yearsRange: [1900, new Date().getFullYear() + 2],
    },
    registry,
    onChange,
    onBlur,
    value,
    rawErrors = [],
  } = props;

  const [state, setState] = useState(parseDateString(value, time));

  const _onChange = (property, value) => {
    setState((prevState) => ({
      ...prevState,
      [property]: typeof value === 'undefined' ? -1 : value,
    }));
  };

  useEffect(() => {
    if (readyForChange(state)) {
      onChange(toDateString(state, time));
    }
  }, [state, time]);

  const setNow = (event) => {
    event.preventDefault();
    if (disabled || readonly) {
      return;
    }
    const nowDateObj = parseDateString(new Date().toJSON(), time);
    setState(nowDateObj);
  };

  const clear = (event) => {
    event.preventDefault();
    if (disabled || readonly) {
      return;
    }
    setState(parseDateString('', time));
  };

  const dateElementProps = useMemo(() => {
    const { year, month, day, hour, minute, second } = state;
    const data = [
      {
        type: 'year',
        range: options.yearsRange,
        value: year,
      },
      { type: 'month', range: [1, 12], value: month },
      { type: 'day', range: [1, 31], value: day },
    ];
    if (time) {
      data.push(
        { type: 'hour', range: [0, 23], value: hour },
        { type: 'minute', range: [0, 59], value: minute },
        { type: 'second', range: [0, 59], value: second }
      );
    }
    return data;
  }, [state, options.yearsRange, time]);

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
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0 1em',
          alignItems: 'flex-start',
        }}
      >
        {dateElementProps.map((elemProps, i) => (
          <DateElement
            key={i}
            rootId={id}
            select={_onChange}
            {...elemProps}
            disabled={disabled}
            readonly={readonly}
            registry={registry}
            onBlur={onBlur}
            autofocus={autofocus && i === 0}
          />
        ))}

        {(options.hideNowButton !== 'undefined'
          ? !options.hideNowButton
          : true) && (
          <Button onClick={setNow} outlined>
            Now
          </Button>
        )}
        {(options.hideClearButton !== 'undefined'
          ? !options.hideClearButton
          : true) && (
          <Button onClick={clear} icon="cross" outlined>
            Clear
          </Button>
        )}
      </div>
    </FormGroup>
  );
}
