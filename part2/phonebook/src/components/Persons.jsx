const Persons = (props) => {
    return (
        <div>
            { 
                props.person.name.toUpperCase().includes(props.filterName.toUpperCase()) ? 
                    <p>{props.person.name} {props.person.number} <button onClick={props.deleteNumber}>delete</button></p> : "" 
            }
        </div>
    )
}

export default Persons
