import React from 'react';
import { Colors, Classes } from '@blueprintjs/core';
import WrapIfAdditional from './WrapIfAdditional';

const FieldTemplate = (props) => {
  const {
    id,
    children,
    displayLabel,
    rawErrors = [],
    rawHelp,
    rawDescription,
    classNames,
    disabled,
    label,
    onDropPropertyClick,
    onKeyChange,
    readonly,
    required,
    schema,
    registry,
  } = props;

  return (
    <WrapIfAdditional {...props}>
      {children}
      {rawErrors.length > 0 && (
        <ul className={`${Classes.LIST} ${Classes.LIST_UNSTYLED}`}>
          {rawErrors.map((error) => {
            return (
              <li key={error} style={{ color: Colors.RED2 }}>
                <small>{error}</small>
              </li>
            );
          })}
        </ul>
      )}
      {rawHelp && (
        <div style={{ color: rawErrors.length > 0 ? Colors.RED2 : 'initial' }}>
          {rawHelp}
        </div>
      )}
    </WrapIfAdditional>
  );
};

export default FieldTemplate;
