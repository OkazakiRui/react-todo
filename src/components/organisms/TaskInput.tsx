import { VFC } from 'react';

type Props = {
  inputTitle: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};

const TaskInput: VFC<Props> = ({
  inputTitle,
  handleInputChange,
  handleSubmit,
}) => (
  <div className="input-form">
    <div className="inner">
      <input
        type="text"
        className="input"
        value={inputTitle}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleSubmit} className="btn is-primary">
        追加
      </button>
    </div>
  </div>
);

export default TaskInput;
