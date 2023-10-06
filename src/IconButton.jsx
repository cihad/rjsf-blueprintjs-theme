import React from 'react';
import { Button } from '@blueprintjs/core';

const mappings = {
  remove: 'trash',
  plus: 'plus',
  'arrow-up': 'arrow-up',
  'arrow-down': 'arrow-down',
};

const IconButton = (props) => {
  const { icon, className, ...otherProps } = props;
  return (
    <Button
      {...otherProps}
      variant={props.variant || 'light'}
      minimal
      icon={mappings[icon]}
    ></Button>
  );
};

export default IconButton;
