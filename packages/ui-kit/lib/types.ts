export enum ITaskState {
  TASK_INBOX = 'TASK_INBOX',
  TASK_ARCHIVED = 'TASK_ARCHIVED',
  TASK_PINNED = 'TASK_PINNED',
}

export interface ITask {
  id: string;
  title: string;
  state: ITaskState;
}
