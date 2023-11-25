import styles from './css/Avatar.module.css'

import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean; 
    src: string;
}
interface User {
    username: string;
}

/*Borda verde ou sem borda dependendo do lugar - Comment, Post ou Sidebar*/
export function Avatar({hasBorder = true, src}: AvatarProps){
    return(
        <img 
        className={hasBorder ? styles.avatar : styles.avatarNoBorder} 
        src={src}
        />
    )
}
/*Nome de Usuário - De quem está logado*/
export function Username({username}: User){
    return(
        <strong>{username}</strong>
    )
}