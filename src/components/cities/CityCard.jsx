import styles from '../../styles/Cities.module.css'

function CityCard({city, facts}) {
  if(!city) {
    return null
  }

  return ( 
    <div className={styles.card}>
      <h2 >{city.name}</h2>
      <img className={styles.cardImage} src={city.imageUrl} alt={city.name} />
      <p  styles={{textAlign:"center"}}>{city.description}</p>
      <ul>
        {city.facts.map((fact, index) => (
        <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
    )
}   

export default CityCard;


