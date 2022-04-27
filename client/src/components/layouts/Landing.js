import React from "react";
import { NavLink } from "react-router-dom";
import './Landing.css'
import styled from "styled-components";

const Button = styled.div`
button{
color:green;
}
` 


const Landing = () =>{
    return (
        <header id = "showcase">
            Welcome to our website
            <Button>
          <NavLink exact to = '/login' > <button className="button" > Admin </button> </NavLink>  
          <NavLink exact to = '/loginu'> <button className="button"> Customer </button> </NavLink>
            </Button>
            </header>
    );
} 

export default Landing;