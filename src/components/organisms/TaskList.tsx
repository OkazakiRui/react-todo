import { VFC } from 'react';
import TaskItem from '../molecules/TaskItem';
import { Task } from '../../types';

type Props = {
  tasks: Task[];
  handleDone: (task: Task) => void;
  handleDelete: (task: Task) => void;
};

const TaskList: VFC<Props> = ({ tasks, handleDone, handleDelete }) => (
  <div className="inner">
    {tasks.length <= 0 ? (
      '登録されたTODOがありません'
    ) : (
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDone={handleDone}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    )}
  </div>
);

export default TaskList;
