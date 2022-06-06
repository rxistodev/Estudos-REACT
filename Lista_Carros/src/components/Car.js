import styles from './Car.module.css'
const Car = ({modelo,ano,km}) => {
  
   
  
   
  
    return (
    <div className={styles.card}>
       <h1>{modelo} </h1>
        <p>ano: {ano}</p>
        <p>km: {km}</p>
            
          
       
        
        
        
        
    </div>
  )
}

export default Car