import {Trash,ThumbsUp} from 'phosphor-react'
import {useState} from 'react'
import {Avatar} from './Avatar'
import styles from './Comment.module.css'

export function Comment({onDeleteComment,...props}){

  const [likeCount,setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(props.content)
  }

  function handleLikeComment(){
    setLikeCount((state) =>{
      return state + 1;
    });
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
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}