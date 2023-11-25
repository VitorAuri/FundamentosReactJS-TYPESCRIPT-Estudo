import { Avatar, Username } from './User.js'

import styles from './css/Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar(){
    
    return (
        
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1700070929576-e07a0945e246?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className={styles.profile}>
                <Avatar src='https://pbs.twimg.com/profile_images/1679637506474508291/v-uaoIMa_400x400.jpg'/>
                <Username username='Vitor Aurilândio' />
                <span>Web Developer</span>
                <footer>
                    <a className={styles.link} href="#">
                        <PencilLine />
                        <p>Editar seu perfil</p>
                    </a>
                </footer>
            </div>
        </aside>
    )
}