import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from "./services/persons"
import Notification from "./components/Notification"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [addedMessage, setAddedMessage] = useState('')

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
      if(checkDuplicate.number === newNumber) {
        alert(`${newName} is already added to phonebook`)
      }
      else {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          const changedNumber = { ...checkDuplicate, number: newNumber}
          personService
            .update(checkDuplicate.id, changedNumber)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id !== checkDuplicate.id ? person : returnedPerson))
            }) 

            setAddedMessage(`Updated ${newName}`)

            setTimeout(() => {
              setAddedMessage(null)
            }, 5000)
            setNewName('')
        }
      }
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      setAddedMessage(`Added ${newName}`)

      setTimeout(() => {
        setAddedMessage(null)
      }, 5000)

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
      <Notification message={addedMessage} />
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