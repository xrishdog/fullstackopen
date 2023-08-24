const PersonForm = ({submitForm, name, phone, onNameChange, onPhoneChange}) =>{
    return(
       <form onSubmit = {submitForm}>
        <div>
          name: <input value = {name} onChange = {onNameChange}/>
        </div>
        <div>
          number: <input value = {phone} onChange = {onPhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm