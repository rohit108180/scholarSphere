import React from 'react'
import Wrapper from '../css/wrapper/ErrorPage'
import img from "../assets/images/not-found.svg";
import { Link } from 'react-router-dom';


export const Error = () => {
  return (
    <Wrapper className='full-page'>
        <div>
            <img src={img} alt="not found" />
            <h3>Ohh!! the page is not found</h3>
            <p>We can't seem to find the page you are looking for.</p>
            <Link to="/">back home</Link>
        </div>

    </Wrapper>

  )
}
