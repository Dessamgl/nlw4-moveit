import styles from '../styles/components/Profile.module.css';

export function Profile() {
 return (
   <div className={styles.profileContainer}>
     <img src="https://github.com/Dessamgl" alt="Andressa"/>
     <div>
       <strong>Andressa Gaspar</strong>
       <p>
        <img src="icons/level.svg" alt="Level"/>
         Level 1
      </p>
     </div>
   </div>
 )
}
