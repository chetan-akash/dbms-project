import React,{useState,useEffect} from 'react';
import Axios from 'axios';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Customer from '../Admin functions/AddCustomer'
// import Dashboard from './Dashboard'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import SideBar from '../layouts/Sidebar/SidebarU';
import styled from 'styled-components';
// const Heading = styled.div`
// background:black;
// display: block;
// white-space:nowrap;
// font-size:30px;
// margin-right: 20rem;
// text-align: center;
// right:-5%;
// position:relative;
// `
const Everything = styled.div`

 `

 
 
 const User = () => {
    const {username} = useParams();
    const [userDetails,setUserDetails] = useState({});
    
    useEffect(() => {
        Axios.get(`user/viewdetails/${username}`).then((response) => {
            setUserDetails(response);
        })
    })

    return (
        <div className='everything'>
        <Everything>
       <SideBar />
       <p>{username}</p>
      <Link to = {`/user/buyitems/${username}`}><button > Buy Items</button></Link>
      <Link to = {`/user/vieworders/${username}`}><button > View Order History</button></Link>
       </Everything>

       </div>
    )
}

export default User;