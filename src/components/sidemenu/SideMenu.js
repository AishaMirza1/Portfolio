import styles from "./SideMenu.module.css"
export default function Sidemenu(){
    return (
        <div className={styles.sideMenu}>
            <div className={styles.sideMenuContent}>
               
                <h2 className={styles.logo}>A<span style={{color:"#ff3c78",fontSize:"40px"}}>.</span></h2>
                <ul>
                  
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}