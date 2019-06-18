import React from 'react';

import { ITask, ITaskState } from '../types';
import Task from './Task';

interface TaskListProps {
  loading?: boolean;
  tasks: ITask[];
  onPinTask: Function;
  onArchiveTask: Function;
}

const LoadingRow = (
  <div className="loading-item">
    <span className="glow-checkbox" />
    <span className="glow-text">
      <span>Loading</span> <span>cool</span> <span>state</span>
    </span>
  </div>
);

const EmptyMessage = (
  <div className="list-items">
    <div className="wrapper-message">
      <span className="icon-check" />
      <div className="title-message">You have no tasks</div>
      <div className="subtitle-message">Sit back and relax</div>
    </div>
  </div>
);

const TaskList: React.FunctionComponent<TaskListProps> = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return <div className="list-items">{EmptyMessage}</div>;
  }

  const tasksInOrder = [
    ...tasks.filter(t => t.state === ITaskState.TASK_PINNED),
    ...tasks.filter(t => t.state !== ITaskState.TASK_PINNED),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} onPinTask={onPinTask} onArchiveTask={onArchiveTask} />
      ))}
    </div>
  );
};

TaskList.defaultProps = {
  tasks: [],
  loading: false,
};

export default TaskList;
