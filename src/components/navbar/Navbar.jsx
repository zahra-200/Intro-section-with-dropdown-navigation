import styles from './Navbar.module.css'

function Navbar(props) {
    let title =
        [
            {
                id: 1,
                title: 'hasan'
            },
            {
                id: 2,
                title: 'ali'
            }
        ]


    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLogoSection}>
                <img src="src\images\logo.svg" alt="" />
            </div>
            <div className={styles.navbarNavigate}>
            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
            </div>
        </div>
    )
}


export default Navbar