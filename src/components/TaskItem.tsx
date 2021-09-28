import { VFC } from "react";
import { Task } from "../types";

type Props = {
  task: Task;
};

const TaskItem: VFC<Props> = ({ task }) => {
  return (
    <li>
      <label>
        <input type="checkbox" className="chackbox-input" />
        <span className="chackbox-label">{task.title}</span>
      </label>
      <button className="btn is-deleate">削除</button>
    </li>
  );
};

export default TaskItem;
