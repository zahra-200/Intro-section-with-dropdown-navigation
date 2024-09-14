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
                <ul>
                    <li>{title[0].title}</li>
                    <li>{title[1].title}</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar