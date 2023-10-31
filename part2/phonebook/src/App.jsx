import { useState, useEffect} from 'react'

import personService from './services/persons.js'

import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'
import Notification from './components/Notification.jsx'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState ('')
  const [newFilter, setNewFilter] = useState('')
  //notifications
  const [message, setMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService.getAll()
      .then(intialList => {
        console.log('promise fulfilled')
        setPersons(intialList)
      })
      .catch(error => {
        console.log(error)
        console.log('promise failed')
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
      phone: newPhone
    }

    //replacing current information
    const alreadyExists = persons.some(person => JSON.stringify(person.name) === JSON.stringify(newName)) 

    if (alreadyExists) {
      const existingIndex = persons.findIndex(person => JSON.stringify(person.name) === JSON.stringify(newName))
      const id = persons[existingIndex].id

      if(window.confirm(`${newName} is already added to the phonebook. Replace the old number with a new one?`)){
        personService.update(id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
          })
          .catch(error => {
            setMessage(`ERROR: Information of ${newName} was already removed from the server`)
            setTimeout(() => setMessage(null), 5000)
          })
      }
    }
    //add new person
    else{
      personService.create(personObject).
        then(newPerson => {
          setPersons(persons.concat(newPerson))

          setMessage(`Added ${newName}`)
          setTimeout(() => {setMessage(null)}, 5000)
        })
      
    }
    setNewName('')
    setNewPhone('')
  }
  
  //delete information
  const deleteInfo = (id) => {
    const targetPerson = persons.filter(person => person.id === id)
    const targetName = targetPerson[0].name
    
    if (window.confirm(`Delete ${targetName}?`)){
      personService.remove(id)
        .then(setPersons(persons.filter(p => p.id !== id)))
    }
    
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
    //console.log(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {message}/>
      <Filter filter = {newFilter} onChange = {handleFilterChange}/>

      <h2>add a new</h2>
      <PersonForm submitForm = {submitInfo} name = {newName} phone = {newPhone}
        onNameChange = {handleNameChange} onPhoneChange = {handlePhoneChange}/>

      <h2>Numbers</h2>
      <Persons filteredArr={infoToShow} handleDelete = {deleteInfo}/>
    </div>
  )
}

export default App