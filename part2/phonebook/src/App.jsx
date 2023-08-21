import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const submitInfo = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      id: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    console.log('button clicked', event.target)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {submitInfo}>
        <div>
          name: <input value = {newName} onChange = {handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key = {person.id}>{person.name}</div>)}
    </div>
  )
}

export default App