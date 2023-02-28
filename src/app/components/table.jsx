import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxField from './formFields/checkBoxField';

const Table = ({ data, onChange, onClick }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TITLE</th>
          <th scope="col">DESCRIPTION</th>
          <th scope="col">STATUS</th>
        </tr>
      </thead>
      <tbody onClick={onClick}>
        {data.map(({ id, title, description, status }) => (
          <tr key={`${id}_${title}`} id={id}>
            <th>{id}</th>
            <td>{title}</td>
            <td>{description}</td>
            <td>
              <CheckBoxField
                name="status"
                value={status}
                itemId={id}
                onChange={onChange}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};
export default Table;
