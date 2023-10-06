import React from 'react';
import { utils } from '@rjsf/core';
import AddButton from './AddButton';

const { canExpand } = utils;

const ObjectFieldTemplate = ({
  DescriptionField,
  description,
  TitleField,
  title,
  properties,
  required,
  uiSchema,
  idSchema,
  schema,
  formData,
  onAddClick,
  disabled,
  readonly,
}) => {
  return (
    <fieldset style={{ marginBottom: 20 }}>
      {(uiSchema['ui:title'] || title) && (
        <TitleField
          id={`${idSchema.$id}-title`}
          title={uiSchema['ui:title'] || title}
          required={required}
        />
      )}
      {description && (
        <DescriptionField
          id={`${idSchema.$id}-description`}
          description={description}
        />
      )}
      {properties.map((element, index) => (
        <div
          key={index}
          style={{
            display: element.hidden ? 'none' : 'block',
            flex: 1,
            marginBottom: '2em',
          }}
        >
          {element.content}
        </div>
      ))}
      {canExpand(schema, uiSchema, formData) ? (
        <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: 'auto' }}>
            <AddButton
              onClick={onAddClick(schema)}
              disabled={disabled || readonly}
              className="object-property-expand"
            />
          </div>
        </div>
      ) : null}
    </fieldset>
  );
};

export default ObjectFieldTemplate;
