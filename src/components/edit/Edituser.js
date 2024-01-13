import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import "./edit.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom'
import {  singleuserdatafunc } from "../../services/Apis"
import { updateuserdatafunc } from "../../services/Apis"
// import Form from 'react-bootstrap/Form';





const Edituser = () => {

  const navtoHome = useNavigate()

  const [editData, setEditData] = useState({
    Name: '',
    Dob: '',
    Gender: '',
    Contact: '',
    Location: '',
    Email: '',

  });
  console.log(editData);
  const hadleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value })
  }
  let { id } = useParams("");
  const fetchsingleuser = async (Id) => {
    
    const response = await singleuserdatafunc(Id);
    console.log('single user data fetched',response);
    if(response.success){
      if(response.data.length > 0){
        
        setEditData(response.data[0])
        const dobData = response.data[0].Dob ? new Date( response.data[0].Dob).toISOString().substring(0, 10) : '';
        setDob(dobData)
      }else{
        console.log('no data found for given id');
      }
    }else{
      console.error('failed to fetch singleuser data',response.massage);
    }
  } 
  
  // set dob value

  const [dob, setDob] = useState('');
  const handleDobChange = (e) => {
    setDob(e.target.value);
    const dobValue = e.target.value;

    // Update the editData state with the Dob value
    setEditData({ ...editData, Dob: dobValue });
  }
  console.log(dob);
  const handleGender=(e)=>{
    const genderValue = e.target.value;
    setEditData({...editData,Gender:genderValue})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const{Name,Dob,Gender,Contact,Location,Email,}=editData
if(Name===""){
  toast.error("Name is require")
}
else if(Dob===""){
  toast.error("Dob is require")
}
else if(Gender===""){
  toast.error("Gender is require")
}
else if(Contact===""){
  toast.error("Contact is require")
}
else if(Contact.length>10 || Contact.length<10){
  toast.error("Please enter a valid mobile number")
}
else if(Location===""){
  toast.error("Location is require")
}
else if(Email===""){
  toast.error("Email is require")
}else if(!Email.includes("@")){
  toast.error("Please enter valid Email")
}else{
  let data = {}
      data.Name = Name
      data.Dob = Dob
      data.Gender = Gender
      data.Contact = Contact
      data.Location = Location
      data.Email = Email

      const response = await updateuserdatafunc(id,data)
     
      console.log(response);
      if(response.success ){
        setEditData  ({
          ...editData,
          Name: '',
          Dob: '',
          Gender: '',
          Contact: '',
          Location: '',
          Email: '',
  
        });
        navtoHome('/Home')
      }else{
      toast.error("An error occurred while submitting the form!!")
    }
}
  }
  useEffect(()=>{
    if(!id){
      console.error('No id  found in the URL');
    }else{
      fetchsingleuser(id)
  
    }
  },[ id])
  return (<>
      <div className='container mb-3' >
        <h2 className='text-center mt-1'> Edit details below</h2>
        <Card className='shadow mt-1 p-3'>
          <div className="profile text-center container" >
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
          </div>
          <Row>
            <form>
              <div className=" container mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="name" className="form-control" name='Name' onChange={hadleChange} value={editData.Name} id="exampleInputName" aria-describedby="emailHelp" placeholder='Enter your Full name ' />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="container mb-3 col-6">
                <label htmlFor="exampleInputPassword1" className="form-label">Dob</label>
                <input type="date" className="form-control" name='Dob' value={dob} onChange={handleDobChange} id="exampleInputAge" placeholder='Enter your Age ' />
              </div>
              <div className=" radio-group">
              <label htmlFor="exampleInputGender" className="form-label">Select your gender</label>
              <div className="form-check mr-mr-auto">
  <input className="form-check-input" type="radio" checked={editData.Gender === 'male'?true:false} value={"male"} name="Gender" onChange={handleGender}  id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="male">
    male
  </label>
</div>
<div className="form-check mr-auto">
  <input className="form-check-input" checked={editData.Gender === 'female' ?true:false} value={"female"} type="radio" name="Gender" onChange={handleGender} id="flexRadioDefault2"/>
  <label className="form-check-label" htmlFor="female">
   female
  </label>
</div>
</div>
              <div className="container mb-3 col-6">
                <label htmlFor="exampleInputPassword1" className="form-label">Contact</label>
                <input type="digit" className="form-control" name='Contact' onChange={hadleChange} value={editData.Contact} id="exampleInputcontact" placeholder='Enter your contact no. ' />
              </div>
              <div className="container mb-3 col-6">
                <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
                <input type="text" className="form-control" name='Location' onChange={hadleChange} value={editData.Location} id="exampleInputLocation" placeholder='Enter your  address ' />
              </div>
              <div className="container mb-3 col-6">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="Email" className="form-control" name='Email' onChange={hadleChange} value={editData.Email} id="exampleInputEmail" placeholder='Enter your Email address ' />
              </div>
              <button type="submit" className="btn btn-primary col-3"  onClick={handleSubmit} style={{ margin: " 0px 37%" }}>Submit</button>
            </form>
          </Row>
        </Card>
        <ToastContainer
position="top-center"/>
      </div>
  </>
  )
}

export default Edituser
