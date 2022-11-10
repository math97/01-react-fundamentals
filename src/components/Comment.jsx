import {Trash,ThumbsUp} from 'phosphor-react'

import {Avatar} from './Avatar'
import styles from './Comment.module.css'

export function Comment({onDeleteComment,...props}){
  function handleDeleteComment(){
    onDeleteComment(props.content)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/math97.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Albuquerque</strong>
              <time title="11 de Maio às 09:13h" dateTime="2022-05-11 09:13:00">Cerca de 2 horas atrás</time>
            </div>

            <button  onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}