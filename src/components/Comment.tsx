import { useState } from 'react'
import { Avatar, Username } from './User'
import styles from './css/Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content , onDeleteComment}: CommentProps){

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://pbs.twimg.com/profile_images/1679637506474508291/v-uaoIMa_400x400.jpg" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <Username username='Vitor Aurilândio'/>
                        <time title='Publicado a 21 de Novembro' dateTime='2022-05-11 20:23'>Publicado cerca 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
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