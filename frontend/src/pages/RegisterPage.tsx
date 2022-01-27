import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";




  const RegisterPage = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [userName, setUserName] = useState("");
  const [channelName, setChannelName] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:8001/login", {
      email,
      password,
      retypePassword,
      userName,
      channelName,
    });

    console.log(data);
  };

    return (
        <Wrapper>
           <div className='first-btn'>
        <button className='btn btn-light '>REGISTER</button>
      </div>
      <form className='w-50 mx-auto mt-4' onSubmit={handleSubmit}>
      <div className='form-group mb-3 d-flex'>
          {/* <label htmlFor="email">Email</label> */}
          
          <i className='far fa-user fa-2x mt-5 mx-2'></i>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type='text'
            name='userName'
            className='form-control'
            placeholder='Username'
          />
        </div>
          
        <div className='form-group mb-3 d-flex'>
          {/* <label htmlFor="email">Email</label> */}
          <i className='far fa-envelope fa-2x mt-5 mx-2'></i>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            name='email'
            className='form-control'
            placeholder='Email'
          />
        </div>

        <div className='form-group mb-3 d-flex'>
          {/* <label htmlFor="email">Email</label> */}
          <i className='fas fa-portrait fa-2x mt-5 mx-2'></i>
          <input
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            type='text'
            name='channelName'
            className='form-control'
            placeholder='Channel name'
          />
        </div>
        <div className='form-group mb-3 d-flex'>
          {/* <label htmlFor="password">Password</label> */}
          <i className='fas fa-lock mt-5 fa-2x mx-2'></i>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            name='password'
            className='form-control'
            placeholder='Password'
          />
          <i className='far fa-eye mt-5 '></i>
        </div>

        <div className='form-group mb-3 d-flex'>
          {/* <label htmlFor="password">Password</label> */}
          <i className='fas fa-lock mt-5 fa-2x mx-2'></i>
          <input
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            type='password'
            name='re-typePassword'
            className='form-control'
            placeholder='Re-type password'
          />
          <i className='far fa-eye mt-5 '></i>
        </div>
        <div className='second-btn mt-5'>
          <button className='btn btn-primary'>REGISTER NOW </button>
        </div>
      </form>
      <div className='third-btn'>
        <button className='btn' >Already have an account? <span className='blue-btn'>Login</span> </button>
      </div>
        </Wrapper>
    );
  };
  
  export default RegisterPage;

  const Wrapper = styled.div`
  
  margin-top: 5rem;
  input[type="password"] {
    border: none;
    border-bottom: 2px solid #a3a3a3;
    background-color: transparent;
    border-radius: 0;
  }
  input[type="email"] {
    border: none;
    border-bottom: 2px solid #a3a3a3;
    background-color: transparent;
    border-radius: 0;
  }
  input[type="text"] {
    border: none;
    border-bottom: 2px solid #a3a3a3;
    background-color: transparent;
    border-radius: 0;
  }

  .first-btn {
    
    display: flex;
    justify-content: center;
    @media screen and (max-width:768px){
        width: 100%;
    }
    .btn-light {
      border-radius: 0;
      padding-right: 17rem;
      padding-left: 17rem;
	  border: none;
    border-bottom: 2px solid #a3a3a3;
    
    }
  }

  .second-btn{
	
    display: flex;
    justify-content: center;
    @media screen and (max-width:768px){
        padding-right: 0;
      padding-left: 0;
    }
	.btn-primary {
      border-radius: 0;
      padding-right: 17rem;
      padding-left: 17rem;
	  background-color: #076FD9;
    }
  }
  .third-btn{
	
    display: flex;
    justify-content: center;
	.blue-btn{
		color: #076FD9;
	}
  }
  
  
  `;
  