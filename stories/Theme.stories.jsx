// import { useState, useMemo, useEffect } from 'react';
// // import { action } from '@storybook/addon-actions';
// import { withTheme } from '@rjsf/core';
// import Theme from '../src/Theme';
// import { samples } from './samples';
// const { useState, useMemo, useEffect } = require('react');
// import { action } from '@storybook/addon-actions';

import { withTheme } from '@rjsf/core';
import Theme from '../src/index';
import {
  simple,
  options,
  nested,
  arrays,
  numbers,
  widgets,
  ordering,
  references,
  custom,
  errors,
  examples,
  large,
  date,
  validation,
  files,
  single,
  customArray,
  customObject,
  alternatives,
  propertyDependencies,
  schemaDependencies,
  additionalProperties,
  anyOf,
  oneOf,
  allOf,
  ifThenElse,
  nullField,
  nullable,
  errorSchema,
  defaults,
} from './samples';

const Form = withTheme(Theme);

function Template(args) {
  return <Form {...args} />;
}

export default {
  title: 'Theme',
  component: Form,
  argTypes: {
    autoComplete: { control: 'boolean' },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    enctype: {
      control: 'radio',
      options: [
        'application/x-www-form-urlencoded',
        'multipart/form-data',
        'text/plain',
      ],
    },
    idPrefix: { control: 'text' },
    idSeparator: { control: 'text' },
    liveOmit: { control: 'boolean' },
    liveValidate: { control: 'boolean' },
    method: { control: 'radio', options: ['post', 'get', 'dialog'] },
    name: { control: 'text' },
    noHtml5Validate: { control: 'boolean' },
    noValidate: { control: 'boolean' },
    omitExtraData: { control: 'boolean' },
    showErrorList: { control: 'boolean' },
    tagName: { control: 'text' },
    target: {
      control: 'radio',
      options: ['_self', '_blank', '_parent', '_top'],
    },
    onChange: { action: 'onChange' },
    onSubmit: { action: 'onSubmit' },
    onError: { action: 'onError' },
    onBlur: { action: 'onBlur' },
    onFocus: { action: 'onFocus' },
  },
  parameters: {
    backgrounds: {
      disable: true,
      values: [
        { name: 'white', value: '#fff' },
        { name: 'gray', value: '#f0f0f0' },
      ],
    },
    actions: { argTypesRegex: '^on.*' },
  },
};

export const Simple = Template.bind({});
Simple.args = { ...simple };

export const UIOptions = Template.bind({});
UIOptions.args = { ...options };

export const Nested = Template.bind({});
Nested.args = { ...nested };

export const Arrays = Template.bind({});
Arrays.args = { ...arrays };

export const Numbers = Template.bind({});
Numbers.args = { ...numbers };

export const Widgets = Template.bind({});
Widgets.args = { ...widgets };

export const Ordering = Template.bind({});
Ordering.args = { ...ordering };

export const References = Template.bind({});
References.args = { ...references };

export const Custom = Template.bind({});
Custom.args = { ...custom };

export const Errors = Template.bind({});
Errors.args = { ...errors };

export const Examples = Template.bind({});
Examples.args = { ...examples };

export const Large = Template.bind({});
Large.args = { ...large };

export const DateTime = Template.bind({});
DateTime.args = { ...date };

export const Validation = Template.bind({});
Validation.args = { ...validation };

export const Files = Template.bind({});
Files.args = { ...files };

export const Single = Template.bind({});
Single.args = { ...single };

export const CustomArray = Template.bind({});
CustomArray.args = { ...customArray };

export const CustomObject = Template.bind({});
CustomObject.args = { ...customObject };

export const Alternatives = Template.bind({});
Alternatives.args = { ...alternatives };

export const PropertyDependencies = Template.bind({});
PropertyDependencies.args = { ...propertyDependencies };

export const SchemaDependencies = Template.bind({});
SchemaDependencies.args = { ...schemaDependencies };

export const AdditionalProperties = Template.bind({});
AdditionalProperties.args = { ...additionalProperties };

export const AnyOf = Template.bind({});
AnyOf.args = { ...anyOf };

export const OneOf = Template.bind({});
OneOf.args = { ...oneOf };

export const AllOf = Template.bind({});
AllOf.args = { ...allOf };

export const IfThenElse = Template.bind({});
IfThenElse.args = { ...ifThenElse };

export const NullFields = Template.bind({});
NullFields.args = { ...nullField };

export const Nullable = Template.bind({});
Nullable.args = { ...nullable };

export const ErrorSchema = Template.bind({});
ErrorSchema.args = { ...errorSchema };

export const Defaults = Template.bind({});
Defaults.args = { ...defaults };
