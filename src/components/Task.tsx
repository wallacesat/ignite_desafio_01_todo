import { Trash } from 'phosphor-react';

import { CheckBox } from './CheckBox'

import styles from './Task.module.css'

interface TaskProps {
  description: string;
  checked?: boolean;
  onClickCheck: () => void;
  onClickDelete: () => void;
}

export function Task({ description,  checked, onClickCheck, onClickDelete }: TaskProps) {

  return (
    <div className={styles.wrapper}>
      <CheckBox checked={checked} onPress={onClickCheck}/>
      <span {...checked ? {className: styles.taskCompleted} : {}} >{description}</span>
      <button onClick={onClickDelete}>
        <Trash size={18} />
      </button>
    </div>
  )
}