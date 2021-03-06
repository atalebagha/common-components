import React, { PropTypes } from 'react';
import styles from './style.scss';

function Button({ className, color, onClick, children, ...props }) {
  const buttonType = color && styles[color];

  return (
    <button
      className={`${styles.quranButton} ${className} ${buttonType}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  className: '',
  color: ''
};

export default Button;
