import { useContext } from 'react'
import Context from '../contexts/userContext'

export default function useUser() {
    const {isPhone,jwt,user,eventForEdit,setEventForEdit} = useContext(Context)
    return {
    isLoggedIn:Boolean(jwt),
    isPhone,
    user,
    jwt,
    eventForEdit,
    setEventForEdit
    }
}