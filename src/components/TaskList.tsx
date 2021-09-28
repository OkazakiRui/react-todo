import { VFC } from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types";

type Props = {
  tasks: Task[];
};

const TaskList: VFC<Props> = ({ tasks }) => {
  return (
    <div className="inner">
      {tasks.length <= 0 ? (
        "登録されたTODOがありません"
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
