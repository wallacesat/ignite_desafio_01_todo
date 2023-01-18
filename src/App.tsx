import * as React from 'react';

import { Header } from "./components/Header";
import { TaskProps, TodoList } from "./components/TodoList";
import { TaskInput } from "./components/TaskInput";

import styles from './App.module.css'

const tasks = [
  {
    id: 1,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false,
  },
  {
    id: 2,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false,
  },
  {
    id: 3,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false,
  },
  {
    id: 4,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: true,
  },
  {
    id: 5,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: true,
  },
]

export function App() {
  const [tasksList, setTasksList] = React.useState<TaskProps[]>(tasks);

  function handleCheck(taskId: number) {
    const taskIndex = tasksList.findIndex(task => task.id === taskId);

    const modifiedTasks = Array.from(tasksList);
    modifiedTasks[taskIndex] = {
      ...modifiedTasks[taskIndex],
      ...{ completed: !modifiedTasks[taskIndex].completed }
    };

    setTasksList(modifiedTasks);
  }

  function handleDelete(taskId: number) {
    setTasksList(tasks => tasks.filter(task => task.id !== taskId));
  }

  function handleNewTask(task: string) {
    const newTask = {
      id: tasksList.length + 1,
      description: task,
      completed: false
    };

    setTasksList(tasks => [...tasks, newTask]);
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <TaskInput onTaskValueChange={handleNewTask}/>
        <TodoList tasksList={tasksList} onClickCheck={handleCheck} onClickDelete={handleDelete}/>
      </div>
    </div>
  )
}
