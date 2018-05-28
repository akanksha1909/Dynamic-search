import generateActionTypes from '../utils/generateActionTypes'
import { setToken, removeToken} from '../constants/Api'
import axios from 'axios'
import {browserHistory} from 'react-router';




export const actionTypes = generateActionTypes(
    'SEARCH_SUCCESS', 'SEARCH_FAILURE'
)




export function getlist() {
    //redux-thunk
    return dispatch => {
        axios.get('https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json').then(function(response){
            return dispatch( { data  : response.data, type: actionTypes.SEARCH_SUCCESS } )
        }).catch(function (err) {
            try{
                if (err.response.status === 401 || err.response.status === 403)
                    return browserHistory.push('/login')
            }catch(e){
                
            }
        });
    }
}
