export const updateContacts =(contact)=>{
    console.log(contact)
    return (dispatch)=>{
        dispatch({
            type:'update',
            payload:contact
        })
    }
}
export const deleteContacts =(contact)=>{
    return(dispatch)=>{
        dispatch({
            type:'delete',
            payload:contact
        })
    }
}
export const editContacts =(contact)=>{
    return(dispatch)=>{
        dispatch({
            type:'delete',
            payload:contact
        })
    }
}