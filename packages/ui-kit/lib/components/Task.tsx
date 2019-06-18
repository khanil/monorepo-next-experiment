import React from 'react';
import { ITask, ITaskState } from '../types';

interface TaskProps {
  task: ITask;
  onArchiveTask: Function;
  onPinTask: Function;
}

const Task: React.FunctionComponent<TaskProps> = ({ task: { title, id, state }, onArchiveTask, onPinTask }) => (
  <div className={`list-item ${state}`}>
    <label className="checkbox">
      <input type="checkbox" defaultChecked={state === ITaskState.TASK_ARCHIVED} disabled={true} name="checked" />
      <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
    </label>

    <div className="title">
      <input type="text" value={title} readOnly={true} placeholder="Input title" />
    </div>

    <div className="actions" onClick={event => event.stopPropagation()}>
      {state !== ITaskState.TASK_ARCHIVED && (
        <a onClick={() => onPinTask(id)}>
          <span className={`icon-star`} />
        </a>
      )}
    </div>
  </div>
);

export default Task;
