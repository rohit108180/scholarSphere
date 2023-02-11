import React, { useEffect, useState } from "react";
import { Alert, FormRow, Logo } from "../component";
import { useAppcontext } from "../context/appContext";
import Wrapper from "../css/wrapper/RegisterPage";
import { useNavigate} from "react-router-dom"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

export const Register = () => {
  const [values, setValues] = useState(initialState);

  const { isLoading, showAlert, displayAlert, setupUser, user } = useAppcontext();

  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate])
  


  const toggleMember  = () => {
    setValues({...values, isMember : !values.isMember});
  }

  const handleChange = (e) => {
    // console.log(e.target.value);
    setValues({...values, [e.target.name] : e.target.value
              })
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if((values.name === "" && values.isMember === false) || values.email === "" || (values.password === "")){
        displayAlert("Please fill all the feilds", "danger");
    }
    else{
      if(values.isMember){
        setupUser({email : values.email, password : values.password},  'login');
      }
      else {
        setupUser({name : values.name, email : values.email, password :values.password}, 'register');
      }


    }

  };

  return (
    <Wrapper className="full-page">
      <form className = "form" onSubmit={onSubmit}>
        <Logo />
        <h3>
          {values.isMember ? "Login" : "Register"}
          </h3>
        {/* name field */}

        {showAlert && <Alert/> }

        {!values.isMember  && 
        
          <FormRow
            type="text"
            value={values.name}
            name="name"
            handleChange={handleChange}
            label = "name"
          />

        }
          <FormRow
            type="email"
            value={values.email}
            name="email"
            handleChange={handleChange}
            label = "Email"
          />

          <FormRow
            type="Password"
            value={values.password}
            name="password"
            handleChange={handleChange}
            label = "Password"
          />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
            Submit
        </button>


        <p>
        {values.isMember ? "Don't have an account?" : "Already have an account?"}
          <button type="button" onClick={toggleMember} className="member-btn">   {!values.isMember ? "Login" : "Register"}</button>
        </p>



      </form>
    </Wrapper>
  );
};
