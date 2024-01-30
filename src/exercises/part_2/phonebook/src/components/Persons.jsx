const Persons = (props) => {
    return (
        <>
            {props.persons
                .filter(person => person.name.includes(props.newFilter))
                .map(person => {
                    return (
                        <p key={person.id}>
                            {person.name} {person.number}
                            <button onClick={() => props.handleRemovePerson(person.name, person.id)}>delete</button>
                        </p>
                    )
                })}

        </>
    )
}

export default Persons