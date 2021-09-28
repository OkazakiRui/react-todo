import { VFC, useState } from "react";
import { Task } from "../types";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskInput: VFC<Props> = ({ tasks, setTasks }) => {
  const [inputTitle, setInputTitle] = useState("");
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
      setInputTitle("");
    }
  };

  return (
    <div className="input-form">
      <div className="inner">
        <input
          type="text"
          className="input"
          value={inputTitle}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit} className="btn is-primary">
          追加
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
