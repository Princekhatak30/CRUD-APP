import axios from "axios";




export const commonrequest = async (methods, url, body, header) => {
  let config = {
    method: methods,
    url,

    header: {
      "content-Type": "application/json"
    },
    data: body
  }
  // axios instance
  
  return axios(config).then((response) => {
    return response.data
  }).catch((error) => {
    return error
  })
}
