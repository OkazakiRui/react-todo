import { VFC } from "react";
import { Task } from "../types";

type Props = {
  task: Task;
  handleDone: (task: Task) => void;
  handleDelete: (task: Task) => void;
};

const TaskItem: VFC<Props> = ({ task, handleDone, handleDelete }) => {
  return (
    <li className={task.done ? "done" : ""}>
      <label>
        <input
          onClick={() => handleDone(task)}
          type="checkbox"
          className="chackbox-input"
          defaultChecked={task.done}
        />
        <span className="chackbox-label">{task.title}</span>
      </label>
      <button onClick={() => handleDelete(task)} className="btn is-deleate">
        削除
      </button>
    </li>
  );
};

export default TaskItem;
