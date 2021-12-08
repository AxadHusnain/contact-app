export const updateContacts =(contact)=>{
    console.log(contact)
    return (dispatch)=>{
        dispatch({
            type:'update',
            payload:contact
        })
    }
}
