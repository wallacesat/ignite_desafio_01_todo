import styles from './TaskCounter.module.css'

interface TaskCounterProps {
  createdTasks: number;
  completedTasks?: number;
  type?: 'created' | 'completed';
}

export function TaskCounter({ createdTasks = 0, completedTasks, type = 'created' }: TaskCounterProps) {

  return type === 'completed' && !!createdTasks ? (
    <div className={styles.counter}>{completedTasks}{' de '}{createdTasks}</div>
  ) : (
    <div className={styles.counter}>{createdTasks}</div>
  )
}