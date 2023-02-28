import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxField = ({ name, value, label, onChange, itemId }) => {
  const handleChange = () => {
    onChange(itemId, { value: !value });
  };

  return (
    <>
      <div className="form-check mb-4 d-inline-block ms-3">
        <label className="form-check-label " htmlFor={name}>
          {label}
        </label>
        <input
          className="form-check-input"
          name={name}
          type="checkbox"
          value=""
          id={name}
          checked={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

CheckBoxField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  itemId: PropTypes.number,
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckBoxField;
