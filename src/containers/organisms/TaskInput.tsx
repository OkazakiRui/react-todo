import { VFC, useState } from 'react';
import TaskInput from '../../components/organisms/TaskInput';
import { Task } from '../../data/tasks';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const EnhancedTaskInput: VFC<Props> = ({ tasks, setTasks }) => {
  const [inputTitle, setInputTitle] = useState('');
  const [count, setCount] = useState(tasks.length + 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const newTask: Task = {
    id: count,
    title: inputTitle,
    done: false,
  };

  const handleSubmit = () => {
    if (inputTitle.length !== 0) {
      setCount(count + 1);
      setTasks([...tasks, newTask]);
      setInputTitle('');
    }
  };

  return (
    <TaskInput
      inputTitle={inputTitle}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default EnhancedTaskInput;
