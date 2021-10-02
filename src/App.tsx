import { VFC, useState } from 'react';
import TaskList from './containers/organisms/TaskList';
import TaskInput from './containers/organisms/TaskInput';
import { Task } from './types';
import './App.css';

const initialState: Task[] = [
  {
    id: 2,
    title: '次のTodo',
    done: false,
  },
  {
    id: 1,
    title: '最初のTodo',
    done: true,
  },
];

const App: VFC = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <div>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
