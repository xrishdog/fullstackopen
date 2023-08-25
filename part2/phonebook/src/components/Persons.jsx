const Persons = ({filteredArr, handleDelete}) => {

    return(
    <>
        {filteredArr.map(person => 
        <div key = {person.id}>{person.name} {person.phone}
            <button onClick = {() => handleDelete(person.id)}>delete</button>
        </div>
        )}
    </>
    )
}
export default Persons