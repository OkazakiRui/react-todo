import { VFC } from 'react';
import TaskList from '../../components/organisms/TaskList';
import { Task } from '../../types';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const EnhancedTaskList: VFC<Props> = ({ tasks, setTasks }) => {
  const handleDone = (task: Task) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...task, done: !task.done } : t)),
    );
  };
  const handleDelete = (task: Task) => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <TaskList
      tasks={tasks}
      handleDelete={handleDelete}
      handleDone={handleDone}
    />
  );
};

export default EnhancedTaskList;
