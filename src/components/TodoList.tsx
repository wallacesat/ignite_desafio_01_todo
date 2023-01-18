import { TaskCounter } from './TaskCounter'
import { EmptyList } from './EmptyList'
import { Task } from './Task'

import styles from './TodoList.module.css'

export interface TaskProps {
  id: number;
  description: string;
  completed: boolean;
}

interface TodoListProps {
  tasksList: TaskProps[];
  onClickCheck: (taskId: number) => void;
  onClickDelete: (taskId: number) => void;
}

export function TodoList({ tasksList, onClickCheck, onClickDelete }: TodoListProps) {

  function checkCompletedTasks() {
    return tasksList.filter(task => task.completed).length;
  }

  const hasAnyTask = !!tasksList.length;

  return (
    <div className={styles.todoList}>
      <header>
        <div className={styles.createdTasks}>
          <strong >Tarefas criadas</strong>
          <TaskCounter createdTasks={tasksList.length} />
        </div>
        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <TaskCounter
            type='completed'
            createdTasks={tasksList.length}
            completedTasks={checkCompletedTasks()}
          />
        </div>
      </header>
      {
        !hasAnyTask ? <EmptyList /> : 
          <div className={styles.tasksList}>
            {
              tasksList.map(task =>
                <Task
                  key={task.id}
                  description={task.description}
                  checked={task.completed}
                  onClickCheck={() => onClickCheck(task.id)}
                  onClickDelete={() => onClickDelete(task.id)}
                />
              )
            }
          </div>
      }
    </div>
  )
}