const Persons = (props) => {
    return (<>{props.persons.filter(person => person.name.includes(props.newFilter)).map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </>)
}

export default Persons