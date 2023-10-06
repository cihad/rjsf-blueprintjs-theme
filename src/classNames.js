export const prefix = 'rjsf';

const withPrefix = (name) => `${prefix}-${name}`;

export const TITLE_FIELD = withPrefix('title-field');

export const TOOLBAR = withPrefix('toolbar');
export const TOOLBAR_COLUMN = withPrefix('toolbar-column');
export const ARRAY_ITEM = withPrefix('array-item');
export const ARRAY_ITEM_INNER = withPrefix('array-item-inner');
export const NORMAL_ARRAY_FIELD_TEMPLATE = withPrefix(
  'normal-array-field-template'
);
export const FIXED_ARRAY_FIELD_TEMPLATE = withPrefix(
  'fixed-array-field-template'
);

export const ARRAY_ITEM_ADD_BUTTON = withPrefix('array-item-add-button');
