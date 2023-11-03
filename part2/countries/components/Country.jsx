const Country = ({country}) =>{
    
    const langEntries = Object.entries(country.languages)
    console.log(langEntries)
    return(
        <div>
            <h2>
                {country.name.common}
            </h2>
            <p>
                capital {country.capital}<br />
                area {country.area}
            </p>

            <h3>
                languages:
            </h3>
            <ul>
                {langEntries.map((language,i) => <li key={i}>{language[1]}</li>)}
            </ul>
            
            <img src={country.flags.png} alt="Country flag"></img>

        </div>
    )
}
export default Country