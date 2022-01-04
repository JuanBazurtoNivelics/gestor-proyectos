import {GET_DEVELOPERS,GET_PROFILE} from './types'

const UserReducer=  (state,action)=>{
    const {payload,type} = action

    switch(type){
        case GET_DEVELOPERS:
        return {
            ...state,
            developers:payload
        }
        case GET_PROFILE:
        return{
            ...state,
            currentProjects:payload 
        }
        default:
            return state
    }

}
export default UserReducer;