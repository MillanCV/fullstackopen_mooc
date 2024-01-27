const Phonebook = (props) => {
    return (
        <form >
            <div> filter shown with <input value={props.newFilter} onChange={props.handleChangeFilter} /></div>
        </form>)
}

export default Phonebook