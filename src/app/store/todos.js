import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: [
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
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    create(state, action) {
      state.entities.push(action.payload);
    },
    changeStatus(state, action) {
      const taskIndex = state.entities.findIndex(
        (t) => t.id === action.payload.id
      );
      state.entities[taskIndex].status = !state.entities[taskIndex].status;
    },
  },
});

const { reducer: todosReducer, actions } = todoSlice;
const { create, changeStatus } = actions;

export const createTask = (newTask) => (dispatch) => {
  dispatch(create(newTask));
};

export const taskChangedStatus = (id) => (dispatch) => {
  dispatch(changeStatus({ id }));
};

export const getTodosList = () => (state) => state.entities;
export const getTodo = (id) => (state) =>
  state.entities.find((t) => t.id === id);

export default todosReducer;
