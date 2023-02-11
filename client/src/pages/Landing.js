// @ts-nocheck
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import main from '../assets/images/main.svg';
import { Logo } from '../component';
import Wrapper from '../css/wrapper/Landing';



export const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/register');
  }


  return (
    <Wrapper>
        <nav>
          <Logo/>
        </nav>
        <div className="container page">
            <div className="info">
                <h1>Job <span>tracing</span> app</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident corporis culpa quidem molestias incidunt aperiam, aliquam voluptates earum ullam qui. Doloribus et quidem doloremque iure. Velit facilis porro dignissimos nisi! Ad, dolorem omnis?
                </p>
                <button className="btn btn-hero" onClick={handleClick}>
                    Login/Register
                </button>
            </div>        
            <img src={main} alt="job-hunt" className='img main-img' />
        </div>
    </Wrapper>
  )
}

