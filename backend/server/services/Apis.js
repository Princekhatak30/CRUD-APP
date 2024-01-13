import {commonrequest} from "./ApiCall"
import {BACKEND_URL} from "./Helper"

export const fillfunc = async(data,header)=>{
    return await commonrequest("POST",`${BACKEND_URL}/users/fillform`,data,header)
}
export const showuserdata = async(data)=>{
    return await commonrequest("GET",`${BACKEND_URL}/users/Details`,data)
}