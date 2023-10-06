import ArrayFieldTemplate from './ArrayFieldTemplate';
import ErrorList from './ErrorList';
import Fields from './Fields';
import FieldTemplate from './FieldTemplate';
import ObjectFieldTemplate from './ObjectFieldTemplate';
import * as Widgets from './widgets';
import { utils } from '@rjsf/core';
import './styles/main.scss';

const { getDefaultRegistry } = utils;
const { fields, widgets } = getDefaultRegistry();

const Theme = {
  ArrayFieldTemplate,
  fields: { ...fields, ...Fields },
  FieldTemplate,
  ObjectFieldTemplate,
  widgets: { ...widgets, ...Widgets },
  ErrorList,
};

export default Theme;
