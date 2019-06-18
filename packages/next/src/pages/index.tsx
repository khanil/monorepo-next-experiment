import { NextFunctionComponent } from 'next';
import { TaskList, ITask, ITaskState } from '@lerna-next/ui-kit';

const tasks: ITask[] = [
  {
    id: '1',
    state: ITaskState.TASK_INBOX,
    title: 'Task 1',
  },
  {
    id: '2',
    state: ITaskState.TASK_INBOX,
    title: 'Task 2',
  },
  {
    id: '3',
    state: ITaskState.TASK_ARCHIVED,
    title: 'Task 3',
  },
  {
    id: '4',
    state: ITaskState.TASK_INBOX,
    title: 'Task 4',
  },
];

const Index: NextFunctionComponent = () => (
  <>
    <h1>Task List</h1>

    <TaskList tasks={tasks} onArchiveTask={() => {}} onPinTask={() => {}} />
  </>
);

export default Index;
