function CityCard({city, facts}) {

    return ( 
        <div className="card">
           <h2 >{city.name}</h2>
           <img className="cardImage" src={city.imageUrl} alt={city.name} />
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


