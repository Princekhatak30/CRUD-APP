import React, { useState ,useEffect} from 'react';
import "./Details.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
// import { Link } from "react-router-dom"
import { NavLink} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {  singleuserdatafunc } from "../../services/Apis"
import {  deleteuserdatafunc } from "../../services/Apis"
import {  toast } from 'react-toastify';
import { useNavigate} from 'react-router-dom';
const Details = () => {
  const navtoHome = useNavigate()
  debugger
  const [singleuser, setSingleuser] = useState({})
  // <div>Tutorial: {searchParams.get('tutorial')}</div>
  debugger
  // console.log(searchParams.get('id'));
  let { id } = useParams("");
  const fetchsingleuser = async (Id) => {
    
      const response = await singleuserdatafunc(Id);
      console.log('single user data fetched',response);
      if(response.success){
        if(response.data.length > 0){

          setSingleuser(response.data[0])
        }else{
          console.log('no data found for given id');
        }
      }else{
        console.error('failed to fetch singleuser data',response.massage);
      }
  } 
  const deletuserdata = async(id)=>{
    const response = await deleteuserdatafunc(id)
    if(response.success){
      fetchsingleuser()
      navtoHome('/Home')
    }else{
      toast.error('error to delete user')
    }
  }
  
  useEffect(()=>{
    if(!id){
      console.error('No id  found in the URL');
    }else{
      fetchsingleuser(id)
    }
  },[ id])
  
  return (

    <div className='container shadow '>
      <h2 className='text-center mt-1 mb-3'>User's Details</h2>
      <div className='container d-flex'>
        <NavLink  className='edituser'>
        <svg  xmlns="http://www.w3.org/2000/svg" height="1.5em" style={{ fill: "red" }} onClick={()=>deletuserdata(singleuser.Id)} viewBox="0 0 448 512">(Commercial License) <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
        </NavLink>
        
<NavLink  to={`/Edituser/${singleuser.Id}`}>

          <svg xmlns="http://www.w3.org/2000/svg" className='adduser' height="1.5em" style={{ fill: "blue" }} viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z" /></svg>
</NavLink>
        
      </div>
      <div className="userprofile">
        <div className=" left col-md-4">

          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="pic" />

        </div>
        <div className="col-md-8 mb-3">

          <Card>
            <Card className="body">
              <Row>
                <div className="text-center">
                  <h4 className='mb-3'>Name&nbsp;:- {singleuser.Name}</h4><hr />
                  <h4 className='mb-3'><svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{ fill: "darksalmon" }} viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" /></svg>&nbsp;:- {singleuser.Dob}</h4><hr />

                  <h4 className='mb-3'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" /></svg>&nbsp;:- {singleuser.Gender}</h4><hr />
                  <h4 className='mb-3'><svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "blue" }} height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>&nbsp;:- {singleuser.Location}</h4><hr />
                  <h4 className='mb-3'><svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "green" }} height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>&nbsp;:-{singleuser.Email}</h4><hr />
                </div>
              </Row>
            </Card>
          </Card>

        </div>
      </div>

    </div>

  )
}

export default Details
