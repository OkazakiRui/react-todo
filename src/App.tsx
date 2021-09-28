import { VFC, useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import { Task } from "./types";
import "./App.css";

const initialState: Task[] = [
  {
    id: 2,
    title: "次のTodo",
    done: false,
  },
  {
    id: 1,
    title: "最初のTodo",
    done: true,
  },
];

const App: VFC = () => {
  // eslint-disable-next-line
  const [tasks, setTasks] = useState(initialState);

  return (
    <div>
      <TaskInput />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
