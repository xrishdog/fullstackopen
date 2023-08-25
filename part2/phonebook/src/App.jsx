import { useState, useEffect} from 'react'
import axios from 'axios'
import personService from './services/persons.js'

import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState ('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    personService.getAll()
      .then(intialList => {
        console.log('promise fulfilled')
        setPersons(intialList)
      })
  }, [])

  console.log('render', persons.length, 'persons')

  //filter variable
  const infoToShow = newFilter === '' 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter))

  //form submission and input event handlers
  const submitInfo = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1
    }

    const alreadyExists = 
      persons.some(person => JSON.stringify(person.name) === JSON.stringify(newName)) 
    if (alreadyExists) {
      alert(`${newName} is already added to the phonebook`)
    }
    else{
      personService.create(personObject).
        then(newPerson => {
          setPersons(persons.concat(newPerson))
        })
    }
    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) =>{
    //console.log(event.target.value)
    setNewPhone(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter = {newFilter} onChange = {handleFilterChange}/>

      <h2>add a new</h2>
      <PersonForm submitForm = {submitInfo} name = {newName} phone = {newPhone}
        onNameChange = {handleNameChange} onPhoneChange = {handlePhoneChange}/>

      <h2>Numbers</h2>
      <Persons filteredArr={infoToShow} />
    </div>
  )
}

export default App