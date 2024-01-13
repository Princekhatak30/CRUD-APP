import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
// import Details from '../details/Details';
import {Link} from "react-router-dom"
import { NavLink} from 'react-router-dom'




const Table = ({userData,deletuserdata}) => {
  // let { id } = useParams("");

  // console.log(userData);

 
  return (
    <div className='container '><Link to="/Fillform">
     <svg className='adduser' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 640 512">
    
      <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/> </svg></Link>
      <Row>
        <div className=" col mt-0">
          <Card className='shadow table_scroll'>
            {userData.length>0 &&(

           
            <table className='align-align-item-center'>
              <tbody>
                {
                userData.length > 0  ?userData.map((element,index)=>{
                  return(
                    <>
                    <tr  className='align-center ' style={{    height:' 50px'}}  >
                  <th className='align-center '>{index + 1}</th>
                  <th className='align-center' >
                  <svg xmlns="http://www.w3.org/2000/svg" style={{fill:"green"}} height="1.5em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                  </th>
                  <th className='align-center'>{element.Name}</th>
                  <th className='align-center'>{element.Dob}</th>
                  <th className='align-center'>{element.Gender}</th>
                  <th className='align-center'>{element.Contact}</th>
                  <th className='align-center'>{element.Location}</th>
                  <th className='align-center'>{element.Email}</th>
                  <th className='icon align-center'>
                    <NavLink  to={`/Details/${element.Id}`}>
<svg  xmlns="http://www.w3.org/2000/svg" height="1.5em"   style={{fill:"green"}}viewBox="0 0 576 512">(Commercial License) <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
</svg>
                    </NavLink  >
                   
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" onClick={()=>deletuserdata(element.Id)} style={{fill:"red"}} viewBox="0 0 448 512">(Commercial License) <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                </svg>
                    
                  <NavLink  to={`/Edituser/${element.Id}`}>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" style={{fill:"blue"}} viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"/></svg>
                  </NavLink>
               
                  </th>
                </tr>
                    </>
                  )
                }): <div className="no_data text-center"> No data found</div>
                }

  

                
              </tbody>
              <thead className='table-dark sticky-top'>
                <tr>
                  <th className='table-dark align-center'>Id</th>
                  <th className='table-dark align-center'>Avatar</th>
                  <th className='table-dark align-center'>Name</th>
                  <th className='table-dark align-center'>Dob</th>
                  <th className='table-dark align-center'>Gender</th>
                  <th className='table-dark align-center'>contact</th>
                  <th className='table-dark align-center'>Location</th>
                  <th className='table-dark align-center'>Email</th>
                  <th className='table-dark align-center'>Action</th>
                </tr>
              </thead>
              
              
            </table>
             )}
          </Card>
        </div>
      </Row>
    </div>
    
  );
}

export default Table;
