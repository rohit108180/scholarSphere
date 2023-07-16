import React, { useEffect, useState } from "react";
import { Alert, FormRow, Logo } from "../component";
import { useAppcontext } from "../context/appContext";
import Wrapper from "../css/wrapper/RegisterPage";
import { useNavigate} from "react-router-dom"
import img from "../assets/images/bg.jpg"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
  role : "Student"
};

export const Register = () => {
  const [values, setValues] = useState(initialState);

  const { isLoading, showAlert, displayAlert, setupUser, user} = useAppcontext();

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
        displayAlert("Please fill all the feilds", "error");
    }
    else{
      if(values.isMember){
        setupUser({email : values.email, password : values.password},  'login');
      }
      else {
        setupUser({name : values.name, email : values.email, password :values.password, role : values.role}, 'register');
      }


    }

  };

  return (
    <Wrapper className="full-page">
      <img src={img} alt="" className="imgg"/>
      <form className = "form" onSubmit={onSubmit}>
        <Logo />
        <h3>
          {values.isMember ? "Login" : "Register"}
          </h3>
        {/* name field */}

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
{!values.isMember&&
          <React.Fragment>
            <input
                type="radio"
                name="role"
                value="Student"
                checked = {values.role === "Student"}
                onChange={handleChange}
                className= "radio"
              />
              Student {"     "}
            <input
                type="radio"
                name="role"
                value="Faculty"
                checked = {
                  values.role === "Faculty"
                }
                onChange={handleChange}
                className= "radio"
              />
              Faculty
            </React.Fragment>
        }
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
