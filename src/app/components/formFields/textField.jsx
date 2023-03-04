import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  label,
  name,
  value,
  type,
  onChange,
  error,
  placeholder,
}) => {
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '');
  };

  return (
    <div className="me-3 d-inline-block">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          placeholder={placeholder}
          className={getInputClasses()}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  type: 'text',
};

TextField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default React.memo(TextField);
