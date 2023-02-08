import React from 'react';

import './Button.css';

function getOrDefaultType(type) {
  const types = ['submit', 'reset', 'button'];
  if (types.includes(type)) {
    return type;
  }
  return 'button';
}

const Button = (props) => {
  const { onClick, type, variant } = props;

  return (
    <button className={variant} onClick={onClick} type={getOrDefaultType(type)}>
      Submit
    </button>
  );
};

export default Button;
