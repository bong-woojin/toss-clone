import styles from './AppLayout.module.css'

export default function AppLayout(){
    return(
        <div className={styles.shell}>
            <header className={styles.gnb}>GNB</header>
            <main className={styles.main}>메인</main>
            <aside className={styles.aside}>관심</aside>
            <nav className={styles.rail}>레일</nav>
            <footer className={styles.ticker}>티커</footer>
        </div>
    )
}