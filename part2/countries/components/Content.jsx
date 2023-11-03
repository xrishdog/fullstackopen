
import Country from './Country'
const Content = ({countries}) => {

    console.log(countries)
    if (countries.length > 10){
        return (
            <p>
                Too many matches, specifiy another filter
            </p>
        )
    }
    else if(countries.length > 1){
        return(
            <div>
                {countries.map((country, i)=> <div key = {i}> {country.name.common} </div>)}
            </div>
        )
          
    }
    else if (countries.length ==1){
        return(
            <Country country = {countries[0]}/>
        )
    }
}

export default Content