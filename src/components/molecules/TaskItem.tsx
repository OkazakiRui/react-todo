import { VFC } from 'react';
import { Task } from '../../types';

type Props = {
  task: Task;
  handleDone: (task: Task) => void;
  handleDelete: (task: Task) => void;
};

const TaskItem: VFC<Props> = ({ task, handleDone, handleDelete }) => (
  <li className={task.done ? 'done' : ''}>
    <input
      onClick={() => handleDone(task)}
      type="checkbox"
      className="chackbox-input"
      defaultChecked={task.done}
      id={String(task.id)}
    />
    <label htmlFor={String(task.id)}>
      <span className="chackbox-label">{task.title}</span>
    </label>
    <button
      type="button"
      onClick={() => handleDelete(task)}
      className="btn is-deleate"
    >
      削除
    </button>
  </li>
);

export default TaskItem;
