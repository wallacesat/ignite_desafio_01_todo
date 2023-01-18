import * as React from 'react';
import { PlusCircle } from 'phosphor-react'

import styles from './TaskInput.module.css'

interface TaskInputProps {
  onTaskValueChange: (task: string) => void;
}

export function TaskInput({ onTaskValueChange }: TaskInputProps) {
  const [taskDescription, setTaskDescription] = React.useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTaskDescription(event.target.value);
  }

  function handleNewTaskInvalid(event: React.InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault();

    onTaskValueChange(taskDescription);
    setTaskDescription('');
  }

  const hasTaskDescription = !!taskDescription.length;

  return (
    <form onSubmit={handleCreateNewTask} className={styles.wrapper}>
      <input
        placeholder='Adicione uma nova tarefa'
        type="text"
        value={taskDescription}
        onChange={handleInputChange}
        required
        onInvalid={handleNewTaskInvalid}
      />
      <button type="submit" {...!hasTaskDescription ? { className: styles.disabled } : {}}>
        <span>Criar</span>
        <PlusCircle size={20} />
      </button>
    </form>
  )
}