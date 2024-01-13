import {commonrequest} from "./ApiCall"
import {BACKEND_URL} from "./Helper"

export const fillfunc = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/users/fillform`,data)
}
export const showuserdata = async(search)=>{
    return await commonrequest("GET",`${BACKEND_URL}/users/Details?search=${search}`,"")
}
export const singleuserdatafunc = async(id)=>{
    return await commonrequest("GET",`${BACKEND_URL}/users/Details/${id}`,"")
}
export const updateuserdatafunc = async(id,data)=>{
    return await commonrequest("PATCH",`${BACKEND_URL}/users/Edituser/${id}`,data)
}
export const deleteuserdatafunc = async(id)=>{
    return await commonrequest("DELETE",`${BACKEND_URL}/users/deleteuser/${id}`,{})
}

