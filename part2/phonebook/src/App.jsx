import { useState } from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 0 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 1 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 2 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 3 }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState ('')

  const [newFilter, setNewFilter] = useState('')

  const infoToShow = newFilter === '' 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter))

  //form submission and input event handlers
  const submitInfo = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phone: newPhone,
      id: persons.length
    }

    const alreadyExists = 
      persons.some(person => JSON.stringify(person.name) === JSON.stringify(newName)) 
    if (alreadyExists) {
      alert(`${newName} is already added to the phonebook`)
    }
    else{
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) =>{
    console.log(event.target.value)
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