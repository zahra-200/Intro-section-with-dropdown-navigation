import styles from './Navbar.module.css'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <div className={styles.navbarLogoSection}>
                <img src="src\images\logo.svg" alt="" />
            </div>
            <div className={styles.navbarNavigate}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar;