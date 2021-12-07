export const updateContacts =(contact)=>{
    return (dispatch)=>{
        dispatch({
            type:'update',
            payload:contact
        })
    }
}
