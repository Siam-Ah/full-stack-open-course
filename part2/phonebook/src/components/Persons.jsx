const Persons = (props) => {
    return (
        <div>
            {props.persons.map(person => 
                person.name.toUpperCase().includes(props.filterName.toUpperCase()) ? 
                    <p key={person.name}>{person.name} {person.number}</p> : "")}
        </div>
    )
}

export default Persons
