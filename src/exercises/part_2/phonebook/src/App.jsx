import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "299208" }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmitName = (event) => {
    event.preventDefault()

    function containsObjectWithName(name) {
      for (var i = 0; i < persons.length; i++) {
        if (persons[i].name === name) {
          return true;
        }
      }
      return false;
    }

    if (!containsObjectWithName(newName))
      setPersons(persons.concat({ name: newName, number: newNumber }))
    else
      alert(`${newName} is already added to phonebook`)

    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmitName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App