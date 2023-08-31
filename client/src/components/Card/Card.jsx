import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../Card/Card.module.css'

function Card({id, name, imgFlag, continent}) {
  return (
    <div className={styles.individual_card}>        
            <h5 className={styles.country} >{name}</h5>                
            <img className={styles.flag} src={imgFlag} alt="" />
            <h5 className={styles.continent_name}>{continent}</h5> 
            <Link to={`/countries/${id}`} className={styles.more_detail}>
                MORE DETAILS
            </Link>
    </div>
  )
}

export default Card