import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/form';
import Modal from '../components/modal';
import Table from '../components/table';
import { createTask, getTodosList, taskChangedStatus } from '../store/todos';

const MainPage = () => {
  const toDoList = useSelector(getTodosList());
  const [modalId, setModalId] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (data) => {
      const newData = {
        id: toDoList.length + 1,
        title: data.title,
        description: data.description,
        status: false,
      };

      dispatch(createTask(newData));
    },
    [dispatch]
  );

  const handleItemClick = (e) => {
    if (e.target.tagName === 'INPUT') return;
    let tr = e.target.closest('tr');
    const id = Number(tr.getAttribute('id'));
    setModalId(id);
  };

  const handleModalClose = () => {
    setModalId(null);
  };

  const handleChangeStatus = (id) => {
    dispatch(taskChangedStatus(id));
  };

  return (
    <div className="position-relative">
      {modalId && (
        <Modal
          id={modalId}
          onChange={handleChangeStatus}
          onClose={handleModalClose}
        />
      )}
      <Form onSubmit={handleSubmit} />
      <Table
        data={toDoList}
        onChange={handleChangeStatus}
        onClick={handleItemClick}
      />
    </div>
  );
};

export default MainPage;
