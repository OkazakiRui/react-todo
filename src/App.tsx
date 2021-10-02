import { VFC, useState } from 'react';
import TaskList from './containers/organisms/TaskList';
import TaskInput from './containers/organisms/TaskInput';
import { initialState } from './data/tasks';
import './App.css';

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
