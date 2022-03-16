import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "./actions";

const initialData = {
  taskItems: [],
};

const taskReducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskItems: [
          ...state.taskItems,
          { text: action.payload, completed: false },
        ],
      };
    case COMPLETE_TASK:
      let updatedTaskItems = [];
      state.taskItems.map((task) => {
        if (task.text === action.payload) {
          task.completed = !task.completed;
        }
        updatedTaskItems.push(task);
      });
      return {
        ...state,
        taskItems: updatedTaskItems,
      };
    case DELETE_TASK:
      return {
        ...state,
        taskItems: [
          ...state.taskItems.filter((task) => task.text !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default taskReducer;
