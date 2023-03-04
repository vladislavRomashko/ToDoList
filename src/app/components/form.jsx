import React, { useCallback, useState } from 'react';
import TextField from './formFields/textField';
import { validator } from '../utils/validator';
import PropTypes from 'prop-types';

const initialState = { title: '', description: '' };

const Form = ({ onSubmit }) => {
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback(
    ({ target }) => {
      setData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    },
    [setData]
  );

  const validatorConfig = {
    title: {
      isRequired: {
        message: 'This field is empty',
      },
    },
    description: {
      isRequired: {
        message: 'This field is empty',
      },
    },
  };

  function validate() {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    onSubmit(data);
    setData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <TextField
        placeholder="Enter title"
        name="title"
        label="Title:"
        value={data.title}
        onChange={handleChange}
        error={errors.title}
      />
      <TextField
        placeholder="Enter description"
        name="description"
        label="Description:"
        value={data.description}
        onChange={handleChange}
        error={errors.description}
      />
      <button
        type="submit"
        className="btn btn-primary "
        style={{ height: '35px' }}
      >
        Create
      </button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
