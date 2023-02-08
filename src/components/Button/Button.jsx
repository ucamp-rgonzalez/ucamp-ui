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
  const { children, onClick, text, type, variant } = props;

  return (
    <button className={variant} onClick={onClick} type={getOrDefaultType(type)}>
      {children || text}
    </button>
  );
};

export default Button;
