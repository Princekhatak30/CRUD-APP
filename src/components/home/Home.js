import React,{ useEffect,useState} from 'react';
import  "./homeutils.css";
import Table from "./Table"
import {  showuserdata } from "../../services/Apis"
import {  deleteuserdatafunc } from "../../services/Apis"
// import { useParams } from 'react-router-dom'
import {  toast } from 'react-toastify';


const Home = () => {
  const [userData,setUserData]=useState([])
  const [search, setSearch] = useState("")
  const fetchdata = async () => {
    try {
      const response = await showuserdata(search);
      console.log('Fetched user data:', response); // Log the response
      if (response.success) {
        setUserData(response.data);
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('An error occurred while fetching user data:', error);
      // Handle errors (e.g., show a notification)
    }
  };
    // delet user 
   
    const deletuserdata = async(id)=>{
      const response = await deleteuserdatafunc(id)
      if(response.success){
        fetchdata()
      }else{
        toast.error('error to delete user')
      }
    }
  useEffect(()=>{
    
    fetchdata(search)
  },[search])
  return (
  <>
    <div className="searchbar navbar navbar-expand-lg">
    <form className="d-flex" role="search">
        <input className="form-control me-2" onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <div className='home-page container'>
      <h3 >Welcom to our Crud App</h3> 
      < Table userData={userData}
               deletuserdata={deletuserdata}
      />
    </div>
    </>
  )
}

export default Home
