const Persons = ({filteredArr}) => {

    return(
    <>
        {filteredArr.map(person => <div key = {person.id}>{person.name} {person.phone}</div>)}
    </>
    )
}
export default Persons