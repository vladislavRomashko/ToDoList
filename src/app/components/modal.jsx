import React from 'react';
import CheckBoxField from './formFields/checkBoxField';
import PropTypes from 'prop-types';

const Modal = ({ data, onClose, onChange }) => {
  const { title, description, status, id } = data;

  return (
    <div className="w-100 h-100  position-absolute  ">
      <div className="row">
        <div
          className="col-md-6 offset-md-3 shadow p-4 bg-body z-3 "
          style={{ marginTop: '90px' }}
        >
          <h2 className="text-center">{title}</h2>
          <h5>Description:</h5>
          <p>{description}</p>
          <div>
            <span>Status:</span>
            <CheckBoxField
              name="status"
              value={status}
              itemId={id}
              onChange={onChange}
            />
          </div>

          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
};

export default Modal;
