
import {browserHistory} from 'react-router'

export function setToken(type, token) {
    localStorage.setItem(type, token)
}

