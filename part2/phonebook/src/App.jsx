import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    console.log("effect")
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addNumber = (event) => {
    event.preventDefault()
    const checkDuplicate = persons.find((person) => person.name.toUpperCase() === newName.toUpperCase())
    if(checkDuplicate) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(returnedPersons => {
          setPersons(persons.concat(returnedPersons))
          setNewName('')
        })
    }
  }

  const deleteNumber = id => {
    const person = persons.find(p => p.id === id)
    const personId = person.id

    if (window.confirm(`Do you want to delete ${person.name}`)) {
      personService
        .remove(personId)
        .then(returnedPersons => {
          setPersons((persons.filter(p => p.id !== returnedPersons.id)))
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        addNumber={addNumber} 
        newName={newName}
        handleNameChange={handleNameChange} 
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} 
      />
      <h2>Numbers</h2>
      {persons.map(person =>
        <Persons key={person.id} person={person} filterName={filterName} deleteNumber={() => deleteNumber(person.id)} />
      )}
    </div>
  )
}

export default App