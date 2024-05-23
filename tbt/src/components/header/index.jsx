import styles from './header.module.css'


export function Header (){
    return (
        <header className={styles.container} >
            <nav className={styles.navbar}>
                <a href = '/'>Home</a>
                <a href = '/'>Contato</a>
                <a href = '/'>Sobre o Projeto</a>
                <a href = '/'>Seja um Voluntario</a>
                <a href = '/'>Doe agora</a>
            </nav>

        </header>
    )
}