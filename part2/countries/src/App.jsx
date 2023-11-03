import { useState , useEffect} from 'react'
import axios from 'axios'
import Content from '/components/Content.jsx'

const App = () =>{
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [allCountries, setAllCountries] = useState([])


  useEffect(() => {
    console.log('effect run')
    
    const countryURL = `https://studies.cs.helsinki.fi/restcountries/api/all`
    console.log('fetching countries...')
    axios
      .get(countryURL)
      .then(response => {
        console.log(response)
        setAllCountries(response.data)
      })
      .catch(error => {
        console.log(error)
        console.log('search failed')
      })
    
  }, [])

  const handleFilterChange = (event) =>{
    console.log(event.target.value)
    setNewFilter(event.target.value)
    const currentFilter = event.target.value
    if (currentFilter){
      setCountries(allCountries.filter(c => c.name.common.toLowerCase().includes(currentFilter)))
    }
    else{
      setCountries([])
    }
  }




  return(
    <div>
      country<input value = {newFilter} onChange ={handleFilterChange}/>
      
      <Content countries = {countries}/>
    </div>
  )
}

export default App
