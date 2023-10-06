import { utils } from '@rjsf/core';
import { ButtonGroup, Button, H4 } from '@blueprintjs/core';
import AddButton from './AddButton';
import {
  ARRAY_ITEM,
  ARRAY_ITEM_INNER,
  TOOLBAR_COLUMN,
  FIXED_ARRAY_FIELD_TEMPLATE,
  NORMAL_ARRAY_FIELD_TEMPLATE,
  ARRAY_ITEM_ADD_BUTTON,
} from './classNames';

const { isMultiSelect, getDefaultRegistry } = utils;

const ArrayFieldTemplate = (props) => {
  const { schema, registry = getDefaultRegistry() } = props;

  if (isMultiSelect(schema, registry.rootSchema)) {
    return <DefaultFixedArrayFieldTemplate {...props} />;
  } else {
    return <DefaultNormalArrayFieldTemplate {...props} />;
  }
};

const ArrayFieldTitle = ({ TitleField, idSchema, title, required }) => {
  if (!title) {
    return null;
  }

  const id = `${idSchema.$id}__title`;
  return <TitleField id={id} title={title} required={required} />;
};

const ArrayFieldDescription = ({ DescriptionField, idSchema, description }) => {
  if (!description) {
    return null;
  }

  const id = `${idSchema.$id}__description`;
  return <DescriptionField id={id} description={description} />;
};

// Used in the two templates
const DefaultArrayItem = (props) => {
  return (
    <div
      key={props.key}
      className={ARRAY_ITEM}
      style={{
        display: 'flex',
        gap: '1em',
      }}
    >
      <div style={{ flex: 1 }} className={ARRAY_ITEM_INNER}>
        {props.children}
      </div>

      <div className={TOOLBAR_COLUMN}>
        {props.hasToolbar && (
          <ButtonGroup minimal>
            {props.hasMoveUp || props.hasMoveDown ? (
              <Button
                icon="arrow-up"
                tabIndex={-1}
                disabled={props.disabled || props.readonly || !props.hasMoveUp}
                onClick={props.onReorderClick(props.index, props.index - 1)}
              />
            ) : null}

            {props.hasMoveUp || props.hasMoveDown ? (
              <Button
                icon="arrow-down"
                tabIndex={-1}
                disabled={
                  props.disabled || props.readonly || !props.hasMoveDown
                }
                onClick={props.onReorderClick(props.index, props.index + 1)}
              />
            ) : null}

            {props.hasRemove ? (
              <Button
                icon="trash"
                tabIndex={-1}
                disabled={props.disabled || props.readonly}
                onClick={props.onDropIndexClick(props.index)}
              />
            ) : null}
          </ButtonGroup>
        )}
      </div>
    </div>
  );
};

const DefaultFixedArrayFieldTemplate = (props) => {
  return (
    <fieldset
      className={`${FIXED_ARRAY_FIELD_TEMPLATE} ${props.className}`}
      style={{ marginBottom: '1em' }}
    >
      <ArrayFieldTitle
        key={`array-field-title-${props.idSchema.$id}`}
        TitleField={props.TitleField}
        idSchema={props.idSchema}
        title={props.uiSchema['ui:title'] || props.title}
        required={props.required}
      />

      {(props.uiSchema['ui:description'] || props.schema.description) && (
        <div
          className="field-description"
          key={`field-description-${props.idSchema.$id}`}
        >
          {props.uiSchema['ui:description'] || props.schema.description}
        </div>
      )}

      <div
        className="row array-item-list"
        key={`array-item-list-${props.idSchema.$id}`}
      >
        {props.items && props.items.map(DefaultArrayItem)}
      </div>

      {props.canAdd && (
        <AddButton
          className={ARRAY_ITEM_ADD_BUTTON}
          onClick={props.onAddClick}
          disabled={props.disabled || props.readonly}
        />
      )}
    </fieldset>
  );
};

const DefaultNormalArrayFieldTemplate = (props) => {
  return (
    <fieldset
      className={NORMAL_ARRAY_FIELD_TEMPLATE}
      style={{ marginBottom: '1em' }}
    >
      <ArrayFieldTitle
        key={`array-field-title-${props.idSchema.$id}`}
        TitleField={props.TitleField}
        idSchema={props.idSchema}
        title={props.uiSchema['ui:title'] || props.title}
        required={props.required}
      />

      {(props.uiSchema['ui:description'] || props.schema.description) && (
        <ArrayFieldDescription
          key={`array-field-description-${props.idSchema.$id}`}
          DescriptionField={props.DescriptionField}
          idSchema={props.idSchema}
          description={
            props.uiSchema['ui:description'] || props.schema.description
          }
        />
      )}

      <div key={`array-item-list-${props.idSchema.$id}`}>
        {props.items && props.items.map((p) => DefaultArrayItem(p))}

        {props.canAdd && (
          <AddButton
            className="array-item-add"
            onClick={props.onAddClick}
            disabled={props.disabled || props.readonly}
          />
        )}
      </div>
    </fieldset>
  );
};

export default ArrayFieldTemplate;
