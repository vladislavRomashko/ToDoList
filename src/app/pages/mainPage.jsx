import React, { useState } from 'react';
import Form from '../components/form';
import Modal from '../components/modal';
import Table from '../components/table';

const initialState = [
  {
    id: 1,
    title: 'First ToDo',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi corrupti repellendus saepe iusto amet harum dolorum animi qui, eaque incidunt!',
    status: false,
  },
  {
    id: 2,
    title: 'Second ToDo',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi corrupti repellendus saepe iusto amet harum dolorum animi qui, eaque incidunt!',
    status: true,
  },
];

const MainPage = () => {
  const [toDoList, setToDoList] = useState(initialState);
  const [modalData, setModalData] = useState(null);

  const handleSubmit = (data) => {
    const newData = {
      id: toDoList.length + 1,
      title: data.title,
      description: data.description,
      status: false,
    };

    setToDoList((prevState) => [...prevState, newData]);
  };

  const handleItemClick = (e) => {
    if (e.target.tagName === 'INPUT') return;
    let tr = e.target.closest('tr');
    const id = Number(tr.getAttribute('id'));
    const modalData = toDoList.find((item) => item.id === id);
    setModalData(modalData);

    return modalData;
  };

  const handleModalClose = () => {
    setModalData(null);
  };

  const handleChangeStatus = (id, data) => {
    const newList = [...toDoList];
    const elementIndex = newList.findIndex((e) => e.id === id);
    newList[elementIndex].status = data.value;

    setToDoList(newList);
  };

  return (
    <div className="position-relative">
      {modalData && (
        <Modal
          data={modalData}
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
