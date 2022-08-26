import { tasksTypes } from "../types/index";

const { SELECT_TASK, FILTERED_TASKS } = tasksTypes;

export const selectTask = (id) => ({
  type: SELECT_TASK,
  taskId: id,
});

export const filteredTasks = (status) => ({
  type: FILTERED_TASKS,
  status: status,
});