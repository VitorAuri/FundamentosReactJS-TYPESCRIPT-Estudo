import styles from './css/Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    return(
        <div className={styles.header}>
            <div>
            <img src={igniteLogo} alt="Ignite Logo" />
            </div>
            <div>
                <h1>Ignite Feed</h1>
            </div>
        </div>
    )
}