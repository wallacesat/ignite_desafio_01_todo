import clipBoard from '../assets/clipBoard.svg'

import styles from './EmptyList.module.css'

export function EmptyList() {

  return (
    <main className={styles.wrapper}>
      <img src={clipBoard} alt="Imagem do clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </main>
  )
}